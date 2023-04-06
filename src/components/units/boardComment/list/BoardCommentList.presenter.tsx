import { BoardCommentListPresenterProps } from "./BoardCommentList.type";
import BoardCommentListItemPresenter from "./BoardCommentListItem.presenter";
import InfiniteScroll from "react-infinite-scroller";
export default function BoardCommentListPresenter(
  props: BoardCommentListPresenterProps
) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListItemPresenter key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
