import * as S from "./MarketLists.styles";
import type { TabsProps } from "antd";
import SearchBar from "../../../commons/search/searchBar/SearchBar";
import { IMarketPresenterProps } from "./MarketLists.types";
import { v4 as uuidv4 } from "uuid";
export default function MarketsListsPresenter(props: IMarketPresenterProps) {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `판매중상품`,
      children: (
        <>
          <S.List>
            <SearchBar onChangeSearch={props.onChangeSearch} />
            {props.data?.fetchUseditems.map((el: any, index: any) => (
              <S.ListItem key={el._id}>
                <S.ListLeft>
                  <S.ImageWrap>
                    {el.images
                      ?.filter((el: string) => el)
                      .map((el: string) => (
                        <S.Image
                          key={el}
                          src={`https://storage.googleapis.com/${el}`}
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
                      {/* {el.name} */}
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
                  {el.price.toLocaleString()}원
                </S.ListRight>
              </S.ListItem>
            ))}
          </S.List>
        </>
      ),
    },
    // {
    //   key: "2",
    //   label: `판매된상품`,
    //   children: (
    //     <>
    //       <Search02Container
    //         refetch={props.refetch}
    //         onChangeKeyword={props.onChangeKeyword}
    //       />
    //       <div className="asdf">
    //         <S.InfiniScroll
    //           pageStart={0}
    //           loadMore={props.onLoadMore}
    //           hasMore={true}
    //         >
    //           <S.List>
    //             {props?.isSoldoutTrue ? (
    //               props.isSoldoutTrue?.map((el: any) => (
    //                 <S.ListItem key={el._id}>
    //                   <S.ListLeft>
    //                     <S.ImageWrap>
    //                       {el.images
    //                         ?.filter((el: string) => el)
    //                         .map((el: string, index: any) => (
    //                           <S.Image
    //                             key={index}
    //                             src={`https://storage.googleapis.com/${el}`}
    //                             onError={props.onChangeImageError}
    //                           />
    //                         ))}
    //                     </S.ImageWrap>
    //                     <S.Content>
    //                       <S.ItemTitle>
    //                         {el.name
    //                           .replaceAll(
    //                             props.keyword,
    //                             `!@#$%${props.keyword}!@#$%`
    //                           )
    //                           .split("!@#$%")
    //                           .map((el: any) => (
    //                             <S.StrongText
    //                               key={uuidv4()}
    //                               isMatched={props.keyword === el}
    //                             >
    //                               {el}
    //                             </S.StrongText>
    //                           ))}
    //                       </S.ItemTitle>
    //                       <S.Desc>{el.remarks}</S.Desc>
    //                       <S.Tags>{el.tags}</S.Tags>
    //                       <S.SellerWrap>
    //                         <S.Seller>
    //                           <S.SellerAvatar
    //                             size="small"
    //                             icon={<S.SllerAvatarUser />}
    //                           />
    //                           {el.seller.name}
    //                         </S.Seller>
    //                         <S.PickCount>
    //                           <S.LickCount />
    //                           {el.pickedCount}
    //                         </S.PickCount>
    //                       </S.SellerWrap>
    //                     </S.Content>
    //                   </S.ListLeft>
    //                   <S.ListRight>
    //                     <S.IconMoney src="/images/icon/icon_money.svg" />
    //                     {/* {el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원 */}
    //                   </S.ListRight>
    //                 </S.ListItem>
    //               ))
    //             ) : (
    //               <></>
    //             )}
    //           </S.List>
    //         </S.InfiniScroll>
    //       </div>
    //     </>
    //   ),
    // },
  ];
  return (
    <>
      <S.Title>베스트 상품</S.Title>
      <S.Tabss defaultActiveKey="1" items={items} />
    </>
  );
}
