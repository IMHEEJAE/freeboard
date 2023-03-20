import * as S from "./BoardCommentList.styles";
import { getDate } from "../../../../commons/utils/utils";
import { BoardCommentListPresenterProps } from "./BoardCommentList.type";
export default function BoardCommentListPresenter(
  props: BoardCommentListPresenterProps
) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.ItemWrapper key={el._id}>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{el.writer}</S.Writer>
                <S.Star value={el.rating} disabled />
              </S.WriterWrapper>
              <S.Contents>{el.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              {/* <S.UpdateIcon src="/images/icon/icon_update.png" /> */}
              <S.DeleteIcon
                id={el._id}
                src="/images/icon/icon_delete.png"
                onClick={props.onClickDelete}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      ))}
      <S.Modal>
        <input type="text" />
      </S.Modal>
    </>
  );
}
