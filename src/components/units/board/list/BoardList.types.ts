import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface BoardListPresenterProps {
  data?: any;
  onClickBoardNew: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  keyword: String;
}
