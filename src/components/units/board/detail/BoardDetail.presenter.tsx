import { getDate } from "../../../../commons/utils/utils";
import { Tooltip } from "antd";
import * as S from "./BoardDetail.styles";
import { BoardDetailPresenterProps } from "./BoardDetail.types";
export default function BoardDetailPresenter(props: BoardDetailPresenterProps) {
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
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.youtubeUrl ?? ""}`}
              >
                <S.IconClip src="/images/icon/icon_clip.svg" />
              </Tooltip>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchBoard.boardAddress?.address ?? ""} ${
                  props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
                }`}
              >
                <S.IconLocation src="/images/icon/icon_location.svg" />
              </Tooltip>
            </S.HeaderRight>
          </S.Header>
          <S.Body>
            <S.Title>{props.data?.fetchBoard.title}</S.Title>
            <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
            <S.ImageWrapper>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImageWrapper>
            <S.CountWrap>
              <S.LikeWrap>
                <S.LikeIcon onClick={props.onClickLike} />
                <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
              </S.LikeWrap>
              <S.LikeWrap>
                <S.DisLikeIcon onClick={props.onClickDislike} />
                <S.DisLikeCount>
                  {props.data?.fetchBoard.dislikeCount}
                </S.DisLikeCount>
              </S.LikeWrap>
            </S.CountWrap>
          </S.Body>
        </S.Card>
        <S.BtnWrap>
          <S.Button onClick={props.onClickBoardsList}>목록으로</S.Button>
          <S.Button onClick={props.onClickBoardEdit}>수정하기</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
          {/* <S.Button>삭제하기</S.Button> */}
        </S.BtnWrap>
      </S.Wrapper>
    </>
  );
}
