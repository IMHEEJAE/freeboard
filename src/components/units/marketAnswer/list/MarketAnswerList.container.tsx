import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./MarketAnswerList.queries";
import { IMarketAnswerListContainerProps } from "./MarketAnswerList.types";
import MarketAnswerListPresenter from "./MarketAnswerList.presenter";

export default function MarketAnswerListContainer(
  props: IMarketAnswerListContainerProps
) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  //   const [deleteUseditemQuestionAnswer] = useMutation(
  //     DELETE_USEDITEM_QUESTION_ANSWER
  //   );
  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <>
      <MarketAnswerListPresenter data={data} onLoadMore={onLoadMore} />
    </>
  );
}
