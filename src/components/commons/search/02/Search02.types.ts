import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface ISearch02PresenterProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearch02ContainerProps {
  refetch: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  // refetchBoardsCount: (
  //   variables: Partial<IQueryFetchBoardsCountArgs>
  // ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  onChangeKeyword: (value: string) => void;
}
