import * as S from "./Search01.styles";
import { ISearch01PresenterProps } from "./Search01.types";

export default function Search01Presenter(props: ISearch01PresenterProps) {
  return (
    <>
      <S.SearchWrap>
        <S.SearchBar onChange={props.onChangeSearch} placeholder="제목 검색" />
      </S.SearchWrap>
    </>
  );
}
