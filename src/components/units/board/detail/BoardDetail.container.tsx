import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetailContainer() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardsArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: router.query.boardId },
    }
  );
  const onClickBoardsList = () => {
    router.push(`/boards`);
  };
  const onClickBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailPresenter
      data={data}
      onClickBoardsList={onClickBoardsList}
      onClickBoardEdit={onClickBoardEdit}
    />
  );
}
