import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardListPresenterProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickBoardNew: () => void;
  onClickDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
