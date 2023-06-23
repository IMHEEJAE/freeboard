import { MouseEvent, useState } from "react";
import * as S from "./MarketCommentList.styles";
import { MarketCommentListPresenterItemProps } from "./MarketCommentList.types";
import { getDate } from "../../../../commons/utils/utils";
import MarketCommentWriteContainer from "../write/MarketCommentWrite.container";
import { DELETE_USEDITEM_QUESTION } from "./MarketCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import MarketAnswerWriteContainer from "../../marketAnswer/write/MarketAnswerWrite.container";
import MarketAnswerListContainer from "../../marketAnswer/list/MarketAnswerList.container";
export default function MarketCommentListItemPresenter(
  props: MarketCommentListPresenterItemProps
) {
  const [isQuestionEdit, setIsQuestionEdit] = useState(false);
  const [isOpenAnswer, setIsOpenAnswer] = useState(false);
  // const [marketCommentId, setMarketCommentId] = useState("");
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDITEM_QUESTION);
  const onClickUpdate = () => {
    setIsQuestionEdit((prev) => !prev);
  };
  const onClickAnswer = () => {
    setIsOpenAnswer((prev) => !prev);
  };
  // const onClickDelete = (event: MouseEvent<HTMLElement>) => {
  //   if (!(event.target instanceof HTMLImageElement)) return;
  //   setMarketCommentId(event.target.id);
  //   setIsQuestionEdit(true);
  // };
  return (
    <>
      {!isQuestionEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.user?.name}</S.Writer>
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.AnswerIcon
                src="/images/icon/icon_comment.svg"
                onClick={onClickAnswer}
              />
              <S.UpdateIcon
                src="/images/icon/icon_update.png"
                onClick={onClickUpdate}
              />
              {/* <S.DeleteIcon
                id={props.el?._id}
                src="/images/icon/icon_delete.png"
                onClick={onClickDelete}
              /> */}
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isQuestionEdit && (
        <MarketCommentWriteContainer
          isQuestionEdit={isQuestionEdit}
          setIsQuestionEdit={setIsQuestionEdit}
          el={props.el}
        />
      )}
      <MarketAnswerListContainer el={props.el} />

      {isOpenAnswer && (
        <MarketAnswerWriteContainer
          el={props.el}
          setIsOpenAnswer={setIsOpenAnswer}
        />
      )}
    </>
  );
}
