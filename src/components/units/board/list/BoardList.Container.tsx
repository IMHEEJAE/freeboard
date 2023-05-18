import BoardListPresenter from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";

export default function BoardListContainer() {
  const [keyword, setKeyword] = useState("");
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  return (
    <>
      <BoardListPresenter
        data={data}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onClickMoveToPage={onClickMoveToPage}
        count={dataBoardsCount?.fetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
        keyword={keyword}
      />
    </>
  );
}
