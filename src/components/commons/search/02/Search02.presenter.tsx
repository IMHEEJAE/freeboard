import * as S from "./Search02.styles";
import { ISearch02PresenterProps } from "./Search02.types";

export default function Search02Presenter(props: ISearch02PresenterProps) {
  return (
    <>
      <S.SearchWrap>
        <S.SearchBar
          onChange={props.onChangeSearch}
          placeholder="판매 된 상품 제목 검색"
        />
      </S.SearchWrap>
    </>
  );
}
