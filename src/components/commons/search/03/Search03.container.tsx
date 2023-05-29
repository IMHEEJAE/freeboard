import { ChangeEvent } from "react";
import _ from "lodash";
import { ISearch03ContainerProps } from "./Search03.types";
import Search03Presenter from "./Search03.presenter";

export default function Search03Container(props: ISearch03ContainerProps) {
  const getDebounce = _.debounce((value) => {
    void props.refetchSoldoutFalse({ search: value });
    props.onChangeKeyword(value);
    console.log("avd", value);
  }, 500);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  return (
    <>
      <Search03Presenter onChangeSearch={onChangeSearch} />
    </>
  );
}
