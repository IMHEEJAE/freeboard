import { IHomePresenterProps } from "./home.types";
import * as S from "./home.styles";
import { getDate } from "../../../commons/utils/utils";
export default function HomePresenter(props: IHomePresenterProps) {
  return (
    <>
      <S.Title>베스트 게시물</S.Title>
      <S.CardWrap>
        {props.data?.fetchBoardsOfTheBest.map((el: any, index: any) => (
          <S.CardBox hoverable key={el._id} onClick={props.onClickDetail}>
            <S.CardImageWrap>
              <S.CardImage>
                {el.images
                  .slice(0, 1)
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.Image
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                      onError={props.onChangeImageError}
                    />
                  ))}
              </S.CardImage>
            </S.CardImageWrap>
            <S.CardContents>
              <S.CardTitle>{el.title}</S.CardTitle>
              <S.CardProfileWrap>
                <S.CardProfileTop>
                  <S.CardProfile>
                    <S.ProfileAvatar icon={<S.UserProfile />} />
                    <S.CardProfileName>{el.writer}</S.CardProfileName>
                  </S.CardProfile>
                  <S.CardProfileLikeIcon />
                </S.CardProfileTop>
                <S.CardProfileBottom>
                  <S.CardProfileDate>{getDate(el.createdAt)}</S.CardProfileDate>
                  <S.CardProfileLike>{el.likeCount}</S.CardProfileLike>
                </S.CardProfileBottom>
              </S.CardProfileWrap>
            </S.CardContents>
          </S.CardBox>
        ))}
      </S.CardWrap>
    </>
  );
}
