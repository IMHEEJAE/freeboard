import { useMutation, useQuery } from "@apollo/client";
import MarketDetailPresenter from "./MarketDetail.presenter";
import { useRouter } from "next/router";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./MarketDetail.queries";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import { MouseEventHandler, useEffect } from "react";
import { FETCH_USEDITEMS } from "../lists/MarketLists.queries";

export default function MarketDetailContainer() {
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const onClickDelete = async (event: MouseEventHandler<HTMLButtonElement>) => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: String(router.query.marketId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: {
              useditemId: String(router.query.marketId),
            },
          },
        ],
      });
      void router.push(`/markets`);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  // 카카오맵
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=9bbd257bacbf7b1e0519291e4f771ef5&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          center: new window.kakao.maps.LatLng(
            Number(data?.fetchUseditem.useditemAddress?.lat) ||
              37.5546788388674,
            Number(data?.fetchUseditem.useditemAddress?.lng) || 126.970606917394
          ),
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);

        console.log(map);

        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        marker.setMap(map);

        window.kakao.maps.event.addListener(map, "click");
      });
    };
  });
  return (
    <>
      <MarketDetailPresenter
        data={data}
        onClickMoveToPage={onClickMoveToPage}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
