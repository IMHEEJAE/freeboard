import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USEDITEMS } from "./MarketList.queries";
import MarketsListPresenter from "./MarketList.presenter";

export default function MarketsListContainer() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USEDITEMS);

  return (
    <>
      <MarketsListPresenter data={data} />
    </>
  );
}
