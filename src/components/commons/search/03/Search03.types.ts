import { ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { ApolloQueryResult } from "@apollo/client";

export interface ISearch03PresenterProps {
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISearch03ContainerProps {
  refetchSoldoutFalse: (
    variables: Partial<IQueryFetchUseditemsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  onChangeKeyword: (value: string) => void;
}
