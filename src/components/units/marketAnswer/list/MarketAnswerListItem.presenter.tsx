import { useState } from "react";
import { IMarketAnswerListItemPresenterProps } from "./MarketAnswerList.types";
import {
  Wrapper,
  AnswerWrapper,
  Arrow,
  UserPhoto,
  AnswerInfo,
  UserName,
  Comment,
  ButtonWrapper,
  WrapperFooter,
  Button,
} from "./MarketAnswerList.styles";
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
      <Wrapper>
        <Arrow src="/images/answerarrow.png" />
        <WrapperFooter>
          <AnswerWrapper>
            <UserPhoto
              src={
                props.answerel?.user?.picture
                  ? `https://storage.googleapis.com/${props.answerel.user.picture}`
                  : "/images/photo.png"
              }
            />
            <AnswerInfo>
              <UserName>{props.answerel?.user?.name}</UserName>
              <Comment>{props.answerel?.contents}</Comment>
            </AnswerInfo>
          </AnswerWrapper>
          <ButtonWrapper>
            <Button onClick={onClickEditAnswer} src="/images/editicon.png" />
            <Button
              //   onClick={props.onClickDeleteAnswer(props.answerel?._id)}
              src="/images/deleteicon.png"
            />
          </ButtonWrapper>
        </WrapperFooter>
      </Wrapper>
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
