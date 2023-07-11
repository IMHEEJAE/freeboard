/* eslint-disable @typescript-eslint/restrict-plus-operands */
import { getDate } from "../../../../../commons/utils/utils";
import * as S from "./MypageCart.styles";
import { IMypageCartPresenterProps } from "./MypageCart.types";
export default function MypageCartPresenter(props: IMypageCartPresenterProps) {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.Tab>
            <S.TabSold onClick={props.onClickSold} isTab={props.isTab}>
              나의상품
            </S.TabSold>
            <S.TabPick onClick={props.onClickPick} isTab={props.isTab}>
              마이찜
            </S.TabPick>
          </S.Tab>
        </S.Header>
        <S.TableWrap>
          {!props.isTab ? (
            <S.Table>
              <S.Thead>
                <S.Tr>
                  <S.TheadNumber>번호</S.TheadNumber>
                  <S.TheadTitle>상품명</S.TheadTitle>
                  <S.TheadSold></S.TheadSold>
                  <S.TheadPrice>판매가격</S.TheadPrice>
                  <S.TheadDay>날짜</S.TheadDay>
                </S.Tr>
              </S.Thead>
              <S.Tbody>
                {props.data?.fetchUseditemsISold.map((el: any, index: any) => (
                  <S.Tr key={el._id}>
                    <S.TbodyNumber>{index + 1}</S.TbodyNumber>
                    <S.TbodyTitle>{el.name}</S.TbodyTitle>
                    <S.TbodySold>{el?.buyer?.name && "판매완료"}</S.TbodySold>
                    <S.TbodyPrice>
                      {el.price.toLocaleString("ko-KR")}원
                    </S.TbodyPrice>
                    <S.TbodyDay>{getDate(el.createdAt)}</S.TbodyDay>
                  </S.Tr>
                ))}
              </S.Tbody>
            </S.Table>
          ) : (
            <S.Table>
              <S.Thead>
                <S.Tr>
                  <S.TheadNumber>번호</S.TheadNumber>
                  <S.TheadTitle>상품명</S.TheadTitle>
                  <S.TheadSold></S.TheadSold>
                  <S.TheadPrice>판매가격</S.TheadPrice>
                  <S.TheadSeller>판매자</S.TheadSeller>
                  <S.TheadDay>날짜</S.TheadDay>
                </S.Tr>
              </S.Thead>
              <S.Tbody>
                {props.dataPick?.fetchUseditemsIPicked.map(
                  (el: any, index: any) => (
                    <S.Tr key={el._id} id={el._id}>
                      <S.TbodyNumber>{index + 1}</S.TbodyNumber>
                      <S.TbodyTitle>{el.name}</S.TbodyTitle>
                      <S.TbodySold>{el?.buyer?.name && "판매완료"}</S.TbodySold>
                      <S.TbodyPrice>
                        {el.price.toLocaleString("ko-KR")}원
                      </S.TbodyPrice>
                      <S.TbodySeller>{el.seller.name}</S.TbodySeller>
                      <S.TbodyDay>{getDate(el.createdAt)}</S.TbodyDay>
                    </S.Tr>
                  )
                )}
              </S.Tbody>
            </S.Table>
          )}
        </S.TableWrap>
        <S.Bottom> </S.Bottom>
      </S.Wrapper>
    </>
  );
}
