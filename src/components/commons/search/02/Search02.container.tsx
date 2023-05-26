import { ChangeEvent } from "react";
import _ from "lodash";
import { ISearch02ContainerProps } from "./Search02.types";
import Search02Presenter from "./Search02.presenter";

export default function Search02Container(props: ISearch02ContainerProps) {
  const getDebounce = _.debounce((value) => {
    // void props.refetch({ search: value });
    // void props.refetchBoardsCount({ search: value });
    // props.onChangeKeyword(value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // console.log("asdf", onChangeSearch);
  };
  return (
    <>
      <Search02Presenter onChangeSearch={onChangeSearch} />
    </>
  );
}
