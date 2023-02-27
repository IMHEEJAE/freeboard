import BoardListPresenter from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";

export default function BoardListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDetail = (event) => {
    router.push(`./boards/${event.target.id}`);
  };
  const onClickBoardNew = () => {
    router.push("./boards/new");
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
