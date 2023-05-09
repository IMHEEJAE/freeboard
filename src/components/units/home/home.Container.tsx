import { useQuery } from "@apollo/client";
import HomePresenter from "./home.Presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./home.queries";
import { IQuery } from "../../../commons/types/generated/types";

export default function HomeContainer() {
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );
  console.log(data?.fetchBoardsOfTheBest);
  return (
    <>
      <HomePresenter data={data} />
    </>
  );
}
