import { SearchWrap, Searchbar } from "./SearchBar.styles";
import { IProps } from "./SearchBar.types";

export default function SearchBar(props: IProps): JSX.Element {
  return (
    <SearchWrap>
      <Searchbar
        placeholder={props.placeholder}
        onChange={props.onChangeSearch}
      ></Searchbar>
    </SearchWrap>
  );
}
