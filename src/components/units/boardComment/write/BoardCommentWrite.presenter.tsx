import * as S from "./BoardCommentWrite.styles";
export default function BoardCommentWritePresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.WrapperTitle>댓글</S.WrapperTitle>
        <S.InputWrapper>
          <S.Input placeholder="작성자" onChange={props.onChangeWriter} />
          <S.Input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="내용을 입력하세요."
            onChange={props.onChangeContents}
          />
          <S.BottomWrapper>
            {/* <S.ContentsLength>/100</S.ContentsLength>/ */}
            <S.Button onClick={props.onClickSubmitComment}>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
