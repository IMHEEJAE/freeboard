import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IMarketPresenterProps {
  data?: any;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  // onChangeImageError: (event: { target: { src: string } }) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  fetchMore: any;
  keyword: string;
}
export interface IMatched {
  isMatched: boolean;
}
