import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListContainer() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const onClickBoardNew = () => {
    router.push("./boards/new");
  };
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`./boards/${event.target.id}`);
  };
  return (
    <>
      <BoardListPresenter
        data={data}
        onClickBoardNew={onClickBoardNew}
        onClickDetail={onClickDetail}
      />
    </>
  );
}
