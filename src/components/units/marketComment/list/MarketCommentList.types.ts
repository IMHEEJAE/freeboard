import { IQuery } from "../../../../commons/types/generated/types";

export interface IMarketCommentListPresenterProps {
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  onLoadMore: () => void;
}
