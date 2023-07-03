import { useQuery } from "@apollo/client";
import HomePresenter from "./home.Presenter";
import { FETCH_BOARDS_OF_THE_BEST } from "./home.queries";
import { IQuery } from "../../../commons/types/generated/types";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

export default function HomeContainer() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoardsOfTheBest">>(
    FETCH_BOARDS_OF_THE_BEST
  );

  const onChangeImageError = (event: { target: { src: string } }) => {
    event.target.src = `../../../../images/nodata_image.png`;
  };

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`./boards/${event.currentTarget.id}`);
  };
  return (
    <>
      <HomePresenter
        data={data}
        onChangeImageError={onChangeImageError}
        onClickDetail={onClickDetail}
      />
    </>
  );
}
