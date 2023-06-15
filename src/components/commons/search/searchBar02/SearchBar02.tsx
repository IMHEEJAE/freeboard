import { SearchWrap02, Searchbar02 } from "./SearchBar02.styles";
import { IProps } from "./SearchBar02.types";

export default function SearchBar02(props: IProps): JSX.Element {
  return (
    <SearchWrap02>
      <Searchbar02
        placeholder={props.placeholder}
        onChange={props.onChangeSearch02}
      ></Searchbar02>
    </SearchWrap02>
  );
}
