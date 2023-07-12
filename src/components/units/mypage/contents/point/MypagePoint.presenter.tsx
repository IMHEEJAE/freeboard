import { getDate } from "../../../../../commons/utils/utils";
import * as S from "./MypagePoint.styles";
import { IMypagePointPresenterProps } from "./MypagePoint.types";
export default function MypagePointPresenter(
  props: IMypagePointPresenterProps
) {
  console.log(props.dataBuying);
  return (
    <>
      <S.Wrapper>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.TheadTh>거래일</S.TheadTh>
              <S.TheadTh>상품명</S.TheadTh>
              <S.TheadTh>거래내역</S.TheadTh>
              <S.TheadTh>거래 후 잔액</S.TheadTh>
              {/* <S.TheadPrice>판매자</S.TheadPrice> */}
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {props.dataBuying?.fetchPointTransactionsOfBuying.map(
              (el: any, index: any) => (
                <S.Tr key={el._id}>
                  <S.TbodyDay>{getDate(el.createdAt)}</S.TbodyDay>
                  <S.TbodyTitle>{el.useditem.name}</S.TbodyTitle>
                  <S.TbodyPrice>
                    {el.amount.toLocaleString("ko-KR")}원
                  </S.TbodyPrice>
                  <S.TbodySold>
                    {el.balance.toLocaleString("ko-KR")}원
                  </S.TbodySold>
                  {/* <S.TbodyTitle>{el.amount}</S.TbodyTitle> */}
                </S.Tr>
              )
            )}
          </S.Tbody>
        </S.Table>
      </S.Wrapper>
    </>
  );
}
