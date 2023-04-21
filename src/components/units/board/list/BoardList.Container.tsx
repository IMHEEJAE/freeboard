import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardListContainer() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickBoardNew = () => {
    void router.push("./boards/new");
  };
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };
  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  };
  return (
    <>
      <BoardListPresenter
        data={data}
        refetch={refetch}
        refetchBoardsCount={refetchBoardsCount}
        onClickBoardNew={onClickBoardNew}
        onClickDetail={onClickDetail}
        count={dataBoardsCount?.fetchBoardsCount}
        onChangeKeyword={onChangeKeyword}
        keyword={keyword}
      />
    </>
  );
}
