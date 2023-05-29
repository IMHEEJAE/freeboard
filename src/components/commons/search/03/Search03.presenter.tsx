import * as S from "./Search03.styles";
import { ISearch03PresenterProps } from "./Search03.types";

export default function Search03Presenter(props: ISearch03PresenterProps) {
  return (
    <>
      <S.SearchWrap>
        <S.SearchBar
          onChange={props.onChangeSearch}
          placeholder="판매 중 상품 검색"
        />
      </S.SearchWrap>
    </>
  );
}
