import { useMutation, useQuery } from "@apollo/client";
import MarketCommentListPresenter from "./MarketCommentList.presenter";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./MarketCommentList.queries";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";

export default function MarketCommentListContainer() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USEDITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });
  // const [deleteUseditemQuestion] = useMutation<
  //   Pick<IMutation, "deleteUseditemQuestion">,
  //   IMutationDeleteUseditemQuestionArgs
  // >(DELETE_USEDITEM_QUESTION);
  const onLoadMore = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };
  // const onClickDelete = async () => {
  //   try {
  //     await deleteUseditemQuestion({
  //       variables: {
  //         useditemQuestionId: ,
  //       },
  //       refetchQueries: [
  //         {
  //           query: FETCH_USEDITEM_QUESTIONS,
  //           variables: { useditemId: router.query.number },
  //         },
  //       ],
  //     });
  //     alert("질문을 삭제합니다~");
  //   } catch (error) {
  //     if (error instanceof Error) alert(error.message);
  //   }
  // };
  return (
    <>
      <MarketCommentListPresenter data={data} onLoadMore={onLoadMore} />
    </>
  );
}
