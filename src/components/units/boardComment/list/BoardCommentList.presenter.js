import * as S from "./BoardCommentList.styles";
export default function BoardCommentListPresenter() {
  return (
    <>
      <S.ItemWrapper>
        <S.FlexWrapper>
          <S.Avatar src="/images/avatar.png" />
          <S.MainWrapper>
            <S.WriterWrapper>
              <S.Writer>작성자</S.Writer>
            </S.WriterWrapper>
            <S.Contents>내용</S.Contents>
          </S.MainWrapper>
          <S.OptionWrapper>
            <S.UpdateIcon src="/images/icon/icon_update.png" />
            <S.DeleteIcon
              // id={el._id}
              src="/images/icon/icon_delete.png"
              // onClick={props.onClickDelete}
            />
          </S.OptionWrapper>
        </S.FlexWrapper>
        <S.DateString>123123</S.DateString>
      </S.ItemWrapper>
    </>
  );
}
