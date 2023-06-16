import { Tooltip } from "antd";
import * as S from "./MarketDetail.styles";
import Dompurify from "dompurify";
import { MarketDetailPresenterProps } from "./MarketDetail.types";
import { getDate } from "../../../../commons/utils/utils";
import { useRouter } from "next/router";

export default function MarketDetailPresenter(
  props: MarketDetailPresenterProps
) {
  const router = useRouter();
  return (
    <>
      <S.Wrapper>
        <S.MarketWrap>
          <S.Header>
            <S.HeaderLeft>
              <S.Avatar src="/images/avatar.png" />
              <S.AvatarInfo>
                <S.Writer>{props.data?.fetchUseditem.seller?.name}</S.Writer>
                <S.AvatarDate>
                  {getDate(props.data?.fetchUseditem.createdAt)}
                </S.AvatarDate>
              </S.AvatarInfo>
            </S.HeaderLeft>
            <S.HeaderRight>
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              >
                <S.IconLocation src="/images/icon/icon_location.svg" />
              </Tooltip>
            </S.HeaderRight>
          </S.Header>
          <S.Body>
            <S.BodyTop>
              <S.TopLeft>
                <S.Title>{props.data?.fetchUseditem.name}</S.Title>
                <S.Remark>{props.data?.fetchUseditem.remarks}</S.Remark>
                <S.Price>
                  {props.data?.fetchUseditem.price.toLocaleString("ko-KR")}원
                </S.Price>
              </S.TopLeft>
              <S.TopRigth>
                <S.LikeWrap>
                  <S.LikeIcon />
                  <S.LikeCount>
                    {props.data?.fetchUseditem.pickedCount}
                  </S.LikeCount>
                </S.LikeWrap>
              </S.TopRigth>
            </S.BodyTop>
            <S.BodyContent>
              <S.ImgWrap>
                {props.data?.fetchUseditem.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Img
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.ImgWrap>
              {process.browser && (
                <S.Content
                  dangerouslySetInnerHTML={{
                    __html: Dompurify.sanitize(
                      props.data?.fetchUseditem.contents
                    ),
                  }}
                />
              )}
              <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
            </S.BodyContent>
            <S.MapWrap>
              <S.Map id="map"></S.Map>
            </S.MapWrap>
            <S.Footer>
              <S.Button onClick={props.onClickMoveToPage(`/markets`)}>
                목록으로
              </S.Button>
              <S.Button>구매하기</S.Button>
              <S.Button
                onClick={props.onClickMoveToPage(
                  `/markets/${router.query.marketId}/edit`
                )}
              >
                수정하기
              </S.Button>
              <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
            </S.Footer>
          </S.Body>
        </S.MarketWrap>
      </S.Wrapper>
    </>
  );
}
