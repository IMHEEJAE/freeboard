import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import MarketsListPresenter from "./MarketList.presenter";
import { useState } from "react";

export default function MarketsListContainer() {
  const [keyword, setKeyword] = useState("");
  const {
    data: isSoldoutTrue,
    refetch,
    fetchMore,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USEDITEMS,
    { variables: { isSoldout: true } }
  );

  const { data: isSoldoutFalse, refetch: refetchSoldoutFalse } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { isSoldout: false } });

  const onChangeImageError = (event: { target: { src: string } }) => {
    const defaultImage = `../../../../images/nodata_image.png`;
    event.target.src = defaultImage;
  };

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };

  const onLoadMore = () => {
    if (isSoldoutTrue === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((isSoldoutTrue?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <>
      <MarketsListPresenter
        isSoldoutTrue={isSoldoutTrue?.fetchUseditems}
        isSoldoutFalse={isSoldoutFalse?.fetchUseditems}
        refetch={refetch}
        refetchSoldoutFalse={refetchSoldoutFalse}
        onLoadMore={onLoadMore}
        onChangeImageError={onChangeImageError}
        onChangeKeyword={onChangeKeyword}
        keyword={keyword}
      />
    </>
  );
}
