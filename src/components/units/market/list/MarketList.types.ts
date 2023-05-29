import { ApolloQueryResult } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IMarketPresenterProps {
  isSoldoutTrue?: any;
  isSoldoutFalse?: any;
  refetchSoldoutFalse: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyword: (value: string) => void;
  onChangeImageError: (event: { target: { src: string } }) => void;
  keyword: string;
  onLoadMore: () => void;
}
export interface IMatched {
  isMatched: boolean;
}
