import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { MouseEvent, useState, ChangeEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardListContainer() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);
  
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    console.log(getDebounce);
  };
  const onClickBoardNew = () => {
    void router.push("./boards/new");
  };
  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };
  return (
    <>
      <BoardListPresenter
        data={data}
        refetch={refetch}
        onClickBoardNew={onClickBoardNew}
        onClickDetail={onClickDetail}
        count={dataBoardsCount?.fetchBoardsCount}
        onChangeSearch={onChangeSearch}
        keyword={keyword}
      />
    </>
  );
}
