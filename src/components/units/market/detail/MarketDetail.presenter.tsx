import { Tooltip } from "antd";
import * as S from "./MarketDetail.styles";
import { MarketDetailPresenterProps } from "./MarketDetail.types";

export default function MarketDetailPresenter(
  props: MarketDetailPresenterProps
) {
  console.log("zzz", props);
  return (
    <>
      <S.Wrapper>
        <S.MarketWrap>
          <S.Header>
            <S.HeaderLeft>
              <S.Avatar src="/images/avatar.png" />
              <S.AvatarInfo>
                <S.Writer>{props.data?.fetchUseditem.name}</S.Writer>
                <S.AvatarDate>
                  {/* {getDate(props.data?.fetchBoard.createdAt)} */}
                  날짜
                </S.AvatarDate>
              </S.AvatarInfo>
            </S.HeaderLeft>
            <S.HeaderRight>
              <Tooltip placement="topRight">
                <S.IconLocation src="/images/icon/icon_location.svg" />
              </Tooltip>
            </S.HeaderRight>
          </S.Header>
          <S.Body>
            <S.BodyTop>
              <S.TopLeft>
                <S.Remark>2019 LTE 32GB</S.Remark>
                <S.Title>삼성갤럭시탭 10.1</S.Title>
                <S.Price>240,120원</S.Price>
              </S.TopLeft>
              <S.TopRigth>
                <S.LikeWrap>
                  <S.LikeIcon />
                  <S.LikeCount>20</S.LikeCount>
                </S.LikeWrap>
              </S.TopRigth>
            </S.BodyTop>
            <S.BodyContent>
              <S.ImgWrap>
                <S.Img />
              </S.ImgWrap>
              <S.Content>액정부분 파손나있음</S.Content>
              <S.Tags>#삼성전자 #캘럭시탭</S.Tags>
            </S.BodyContent>
            <S.MapWrap>
              <S.Map></S.Map>
            </S.MapWrap>
            <S.Footer>
              <S.Button>목록으로</S.Button>
              <S.Button>수정하기</S.Button>
            </S.Footer>
          </S.Body>
        </S.MarketWrap>
      </S.Wrapper>
    </>
  );
}
