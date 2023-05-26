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
  const { data: isSoldoutTrue, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS, { variables: { isSoldout: true } });

  const { data: isSoldoutFalse } = useQuery<
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
  return (
    <>
      <MarketsListPresenter
        isSoldoutTrue={isSoldoutTrue?.fetchUseditems}
        isSoldoutFalse={isSoldoutFalse?.fetchUseditems}
        refetch={refetch}
        onChangeImageError={onChangeImageError}
        onChangeKeyword={onChangeKeyword}
        keyword={keyword}
      />
    </>
  );
}
