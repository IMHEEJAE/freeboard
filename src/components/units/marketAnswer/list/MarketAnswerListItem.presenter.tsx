import { useState } from "react";
import { IMarketAnswerListItemPresenterProps } from "./MarketAnswerList.types";
import * as S from "./MarketAnswerList.styles";
import MarketAnswerWriteContainer from "../write/MarketAnswerWrite.container";
export default function MarketAnswerListItemPresenter(
  props: IMarketAnswerListItemPresenterProps
) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);

  const onClickEditAnswer = () => {
    setIsAnswerEdit((prev) => !prev);
  };
  return (
    <>
      {!isAnswerEdit && (
        <S.ItemWrapper>
          <S.Arrow src="/images/icon/icon_answer.svg" />
          <S.FlexWrapper>
            <S.MainWrapper>
              <S.Avatar
                src={
                  props.answerel?.user?.picture
                    ? `https://storage.googleapis.com/${props.answerel.user.picture}`
                    : "/images/avatar.png"
                }
              />
              <S.WriterWrapper>
                <S.UserName>{props.answerel?.user?.name}</S.UserName>
                <S.Contents>{props.answerel?.contents}</S.Contents>
              </S.WriterWrapper>
            </S.MainWrapper>
            <S.ButtonWrapper>
              <S.Button
                onClick={onClickEditAnswer}
                src="/images/icon/icon_update.png"
              />
              <S.Button
                //   onClick={props.onClickDeleteAnswer(props.answerel?._id)}
                src="/images/icon/icon_delete.png"
              />
            </S.ButtonWrapper>
          </S.FlexWrapper>
        </S.ItemWrapper>
      )}

      {isAnswerEdit && (
        <MarketAnswerWriteContainer
          isAnswerEdit={isAnswerEdit}
          setIsAnswerEdit={setIsAnswerEdit}
          answerel={props.answerel}
          setIsOpenAnswer={undefined}
        />
      )}
    </>
  );
}
