import * as S from "./Search02.styles";
import { ISearch02PresenterProps } from "./Search02.types";

export default function Search02Presenter(props: ISearch02PresenterProps) {
  console.log("dkdl", props.onChangeSearch);
  return (
    <>
      <S.SearchWrap>
        <S.SearchBar onChange={props.onChangeSearch} placeholder="제목 검색" />
      </S.SearchWrap>
    </>
  );
}
