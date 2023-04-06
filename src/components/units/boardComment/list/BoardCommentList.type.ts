import { IQuery } from "../../../../commons/types/generated/types";
export interface BoardCommentListPresenterProps {
  data: Pick<IQuery, "fetchBoardComments"> | undefined;
  onLoadMore: () => void;
}
export interface BoardCommentListItemPresenterProps {
  el: any;
}
