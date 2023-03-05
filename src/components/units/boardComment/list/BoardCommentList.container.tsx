import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListPresenter from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const onClickDelete = async (event) => {
    const myPassword = prompt("비밀번호를 입력하세요오!!!");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
          password: myPassword,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
    } catch (error) {}
  };
  return (
    <>
      <BoardCommentListPresenter data={data} onClickDelete={onClickDelete} />
    </>
  );
}
