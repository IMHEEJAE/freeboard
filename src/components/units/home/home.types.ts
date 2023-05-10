import { MouseEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IHomePresenterProps {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
  onChangeImageError: (event: { target: { src: string } }) => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
