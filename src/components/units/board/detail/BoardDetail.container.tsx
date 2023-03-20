import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardDetailContainer() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
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
  const onClickLikeCount = () => {
    setLikeCount(likeCount + 1);
  };
  const onClickDislikeCount = () => {
    setDislikeCount(dislikeCount + 1);
  };
  return (
    <BoardDetailPresenter
      data={data}
      onClickBoardsList={onClickBoardsList}
      onClickBoardEdit={onClickBoardEdit}
      onClickLikeCount={onClickLikeCount}
      onClickDislikeCount={onClickDislikeCount}
      likeCount={likeCount}
      dislikeCount={dislikeCount}
    />
  );
}
