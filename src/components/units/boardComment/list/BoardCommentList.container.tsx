import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentListPresenter from "./BoardCommentList.presenter";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";

export default function BoardCommentListContainer() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  // const [open, setOpen] = useState(false);
  if (typeof router.query.boardId !== "string") return;
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: router.query.boardId,
    },
  });
  const handleCancel = () => {
    console.log("Clicked cancel button");
    // setOpen(false);
  };
  // if (typeof router.query.boardId !== "string") {
  //   useEffect(() => {
  //     alert("올바르지 않은 게시글 아이디입니다.");
  //   }, []);
  //   void router.push("/");
  //   return <></>;
  // }

  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const myPassword = prompt("비밀번호를 입력하세요오!!!");
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.currentTarget.id,
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
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  return (
    <>
      <BoardCommentListPresenter
        data={data}
        onClickDelete={onClickDelete}
        // open={open}
        handleCancel={handleCancel}
      />
    </>
  );
}
