import * as S from "./MarketList.styles";
import { IMarketPresenterProps } from "./MarketList.types";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { v4 as uuidv4 } from "uuid";
import Search02Container from "../../../commons/search/02/Search02.container";
export default function MarketsListPresenter(props: IMarketPresenterProps) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `판매중상품`,
      children: (
        <>
          <S.List>
            {props.isSoldoutFalse?.map((el: any) => (
              <S.ListItem key={el._id}>
                <S.ListLeft>
                  <S.ImageWrap>
                    {el.images
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <S.Image
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
                          onError={props.onChangeImageError}
                        />
                      ))}
                  </S.ImageWrap>
                  <S.Content>
                    <S.ItemTitle>{el.name}</S.ItemTitle>
                    <S.Desc>{el.remarks}</S.Desc>
                    <S.Tags>{el.tags}</S.Tags>
                    <S.SellerWrap>
                      <S.Seller>
                        <S.SellerAvatar
                          size="small"
                          icon={<S.SllerAvatarUser />}
                        />
                        {el.seller.name}
                      </S.Seller>
                      <S.PickCount>
                        <S.LickCount />
                        {el.pickedCount}
                      </S.PickCount>
                    </S.SellerWrap>
                  </S.Content>
                </S.ListLeft>
                <S.ListRight>
                  <S.IconMoney src="/images/icon/icon_money.svg" />
                  {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </S.ListRight>
              </S.ListItem>
            ))}
          </S.List>
        </>
      ),
    },
    {
      key: "2",
      label: `판매된상품`,
      children: (
        <>
          <S.List>
            <Search02Container
              refetch={props.refetch}
              onChangeKeyword={props.onChangeKeyword}
            />
            {props.isSoldoutTrue?.map((el: any) => (
              <S.ListItem key={el._id}>
                <S.ListLeft>
                  <S.ImageWrap>
                    {el.images
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <S.Image
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
                          onError={props.onChangeImageError}
                        />
                      ))}
                  </S.ImageWrap>
                  <S.Content>
                    <S.ItemTitle>
                      {el.name
                        .replaceAll(props.keyword, `!@#$%${props.keyword}!@#$%`)
                        .split("!@#$%")
                        .map((el: any) => (
                          <S.StrongText
                            key={uuidv4()}
                            isMatched={props.keyword === el}
                          >
                            {el}
                          </S.StrongText>
                        ))}
                    </S.ItemTitle>
                    <S.Desc>{el.remarks}</S.Desc>
                    <S.Tags>{el.tags}</S.Tags>
                    <S.SellerWrap>
                      <S.Seller>
                        <S.SellerAvatar
                          size="small"
                          icon={<S.SllerAvatarUser />}
                        />
                        {el.seller.name}
                      </S.Seller>
                      <S.PickCount>
                        <S.LickCount />
                        {el.pickedCount}
                      </S.PickCount>
                    </S.SellerWrap>
                  </S.Content>
                </S.ListLeft>
                <S.ListRight>
                  <S.IconMoney src="/images/icon/icon_money.svg" />
                  {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
                </S.ListRight>
              </S.ListItem>
            ))}
          </S.List>
        </>
      ),
    },
  ];
  return (
    <>
      <S.Title>베스트 상품</S.Title>
      <Search02Container
        refetch={props.refetch}
        onChangeKeyword={props.onChangeKeyword}
      />
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
}
