import InfiniteScroll from "react-infinite-scroller";
import { IMarketAnswerListPresenterProps } from "./MarketAnswerList.types";
import MarketAnswerListItemPresenter from "./MarketAnswerListItem.presenter";
export default function MarketAnswerListPresenter(
  props: IMarketAnswerListPresenterProps
) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props?.data ? (
          props.data?.fetchUseditemQuestionAnswers.map((answerel: any) => (
            <MarketAnswerListItemPresenter
              key={answerel._id}
              answerel={answerel}
            />
          ))
        ) : (
          <></>
        )}
      </InfiniteScroll>
    </>
  );
}
