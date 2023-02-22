import BoardDetailPresenter from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function BoardDetailContainer() {
  const router = useRouter();
  console.log(router.query.boardId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  return <BoardDetailPresenter data={data} />;
}
