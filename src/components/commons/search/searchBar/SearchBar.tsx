import { SearchWrap, Searchbar } from "./SearchBar.styles";
import { IProps } from "./SearchBar.types";

export default function SearchBar(props: IProps): JSX.Element {
  return (
    <SearchWrap>
      <Searchbar
        placeholder="검색어를 입력해 주세요."
        onChange={props.onChangeSearch}
      ></Searchbar>
    </SearchWrap>
  );
}
