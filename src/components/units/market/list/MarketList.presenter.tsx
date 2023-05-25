import * as S from "./MarketList.styles";
import { IMarketPresenterProps } from "./MarketList.types";

export default function MarketsListPresenter(props: IMarketPresenterProps) {
  console.log(props.data);
  return (
    <>
      <S.Title>베스트 상품</S.Title>
      <S.List>
        {props.data?.fetchUseditems.map((el: any) => (
          <S.ListItem key={el._id}>
            <S.ListLeft>
              <S.Image>
                {el.images
                  ?.filter((el: string) => el)
                  .map((el: string) => (
                    <S.ImageT
                      key={el}
                      src={`https://storage.googleapis.com/${el}`}
                    />
                  ))}
              </S.Image>
              <S.Content>
                <S.ItemTitle>{el.name}</S.ItemTitle>
                <S.Desc>{el.remarks}</S.Desc>
                <S.Tags>{el.tags}</S.Tags>
                <S.SellerWrap>
                  <S.Seller>{el.seller.name}</S.Seller>
                  <S.PickCount>{el.pickedCount}</S.PickCount>
                </S.SellerWrap>
              </S.Content>
            </S.ListLeft>
            <S.ListRigth>{el.price}</S.ListRigth>
          </S.ListItem>
        ))}
      </S.List>
    </>
  );
}
