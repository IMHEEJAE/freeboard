import { getDate } from "@/src/commons/utils/utils";
import * as S from "./BoardDetail.styles";
export default function BoardDetailPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.Card>
          <S.Header>
            <S.HeaderLeft>
              <S.Avatar src="/images/avatar.png" />
              <S.AvatarInfo>
                <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
                <S.AvatarDate>
                  {getDate(props.data?.fetchBoard.createdAt)}
                </S.AvatarDate>
              </S.AvatarInfo>
            </S.HeaderLeft>
            <S.HeaderRight>
              <S.IconClip src="/images/icon/icon_clip.svg" />
              <S.IconLocation src="/images/icon/icon_location.svg" />
            </S.HeaderRight>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard.title}</S.Title>
            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          </S.Body>
        </S.Card>
        <S.BtnWrap>
          <S.Button onClick={props.onClickBoardsList}>목록으로</S.Button>
          <S.Button>수정하기</S.Button>
          <S.Button>삭제하기</S.Button>
        </S.BtnWrap>
      </S.Wrapper>
    </>
  );
}
