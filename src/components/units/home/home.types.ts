import { IQuery } from "../../../commons/types/generated/types";

export interface IHomePresenterProps {
  data?: Pick<IQuery, "fetchBoardsOfTheBest">;
}
