import { useQuery } from "@apollo/client";
import MarketDetailPresenter from "./MarketDetail.presenter";
import { FETCH_USEDITEM } from "./MarketDetail.queries";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function MarketDetailContainer() {
  const router = useRouter();
 const {data }= useQuery(FETCH_USEDITEM)
  return (
    <>
      <MarketDetailPresenter data={data} />
    </>
  );
}
