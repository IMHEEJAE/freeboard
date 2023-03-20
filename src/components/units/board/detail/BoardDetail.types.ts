import { IQuery } from "../../../../commons/types/generated/types";

export interface BoardDetailPresenterProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickBoardsList: () => void;
  onClickBoardEdit: () => void;
  onClickLikeCount: () => void;
  onClickDislikeCount: () => void;
  likeCount: number;
  dislikeCount: number;
}
