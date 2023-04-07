import * as S from "./BoardCommentWrite.styles";
import { BoardCommentWritePresenterProps } from "./BoardCommentWrite.type";
export default function BoardCommentWritePresenter(
  props: BoardCommentWritePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        {!props.isEdit && (
          <>
            <S.WrapperTitle>댓글</S.WrapperTitle>
          </>
        )}

        <S.InputWrapper>
          <S.Input
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer || (props.el?.writer ?? "")}
            readOnly={!!props.el?.writer}
          />
          <S.Input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          />
          <S.Star onChange={props.setStar} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Contents
            maxLength={100}
            placeholder="내용을 입력하세요."
            onChange={props.onChangeContents}
            value={props.contents || (props.el?.contents ?? "")}
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {(props.contents
                ? props.contents.length
                : props.el?.contents.length) ?? 0}
              /100
            </S.ContentsLength>
            <S.Button
              onClick={
                props.isEdit ? props.onClickUpdate : props.onClickSubmitComment
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
