import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { BoardCommentListItemPresenterProps } from "./BoardCommentList.type";
import { ChangeEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
export default function BoardCommentListItemPresenter(
  props: BoardCommentListItemPresenterProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [myPassword, setMyPassword] = useState("");
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDelete = async (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) return;
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {
              boardId: router.query.boardId,
            },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };
  const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const handleCancel = (event: MouseEvent<HTMLElement>) => {
    setIsOpenDeleteModal(false);
  };
  const onClickDeleteModal = (event: MouseEvent<HTMLElement>) => {
    setIsOpenDeleteModal(true);
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };
  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          visible={true}
          onCancel={handleCancel}
          onOk={onClickDelete}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star value={props.el?.rating} disabled />
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
      )}
    </>
  );
}
