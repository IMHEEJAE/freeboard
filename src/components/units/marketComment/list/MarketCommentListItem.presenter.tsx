import { MouseEvent, useState } from "react";
import * as S from "./MarketCommentList.styles";
import { MarketCommentListPresenterItemProps } from "./MarketCommentList.types";
import { getDate } from "../../../../commons/utils/utils";
import MarketCommentWriteContainer from "../write/MarketCommentWrite.container";
export default function MarketCommentListItemPresenter(
  props: MarketCommentListPresenterItemProps
) {
  const [isQuestionEdit, setIsQuestionEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [marketCommentId, setMarketCommentId] = useState("");
  const onClickUpdate = () => {
    setIsEdit(true);
  };
  const onClickDeleteModal = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    setMarketCommentId(event.target.id);
    setIsQuestionEdit(true);
  };
  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    setIsQuestionEdit(false);
  };
  console.log("asd15f61asdf", props);
  return (
    <>
      {isQuestionEdit && (
        <S.PasswordModal
          visible={true}
          //   onOk={onClickDelete}
          onCancel={handleCancel}
        >
          <span>비밀번호 입력: </span>
          <S.PasswordInput type="password" />
        </S.PasswordModal>
      )}
      {!isEdit && (
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
              <S.UpdateIcon
                src="/images/icon/icon_update.png"
                onClick={onClickUpdate}
              />
              <S.DeleteIcon
                id={props.el?._id}
                src="/images/icon/icon_delete.png"
                onClick={onClickDeleteModal}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el?.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}{" "}
      {/* {isEdit && (
        <MarketCommentWriteContainer
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )} */}
    </>
  );
}
