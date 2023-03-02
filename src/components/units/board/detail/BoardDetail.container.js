import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardDetailContainer() {
  const router = useRouter();
  // const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  const onClickBoardsList = () => {
    router.push(`/boards`);
  };
  const onClickBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };
  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        boardId: event.target.id,
      },
    });
  };
  return (
    <BoardDetailPresenter
      data={data}
      onClickBoardsList={onClickBoardsList}
      onClickBoardEdit={onClickBoardEdit}
      // onClickDelete={onClickDelete}
    />
  );
}
