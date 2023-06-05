import InputsBoard from "../../../commons/inputs/board/InputsBoard";
import "react-quill/dist/quill.snow.css";
import * as S from "./MarketWrite.styles";
import { IMarketWritePresenterProps } from "./MarketWrite.types";

export default function MarketWritePresenter(
  props: IMarketWritePresenterProps
) {
  return (
    <>
      <S.Wrapper>
        <S.Title>상품 등록</S.Title>
        <S.FormWrap>
          <form onSubmit={props.handleSubmit}>
            <S.InputWrap>
              <S.Label>상품명</S.Label>
              <InputsBoard
                type="text"
                register={props.register("name")}
                placeholder="상품명을 작성해주세요."
                //   defaultValue={props.data?.fetchBoard.writer ?? ""}
                //   readOnly={!!props.data?.fetchBoard.writer}
              />
              <S.Label>한줄요약</S.Label>
              <InputsBoard
                type="text"
                register={props.register("remark")}
                placeholder="한줄요약을 작성해주세요."
              />
              <S.Label>상품설명</S.Label>
              <S.Quill
                onChange={props.onChangeContents}
                value={props.contents || props.data?.fetchUseditem.contents}
              />
              <S.Label>판매가격</S.Label>
              <InputsBoard
                type="text"
                register={props.register("remark")}
                placeholder="판매 가격을 작성해주세요."
              />
              <S.Label>태그입력</S.Label>
              <InputsBoard
                type="text"
                register={props.register("remark")}
                placeholder="#태그 #태그 #태그"
              />
            </S.InputWrap>
            <S.MapWrap>
              <S.MapBox>
                <S.Label>거래위치</S.Label>
                <S.MapImg></S.MapImg>
              </S.MapBox>
              <S.MapDesc>
                <S.Label>GPS</S.Label>
              </S.MapDesc>
            </S.MapWrap>
          </form>
        </S.FormWrap>
      </S.Wrapper>
    </>
  );
}
