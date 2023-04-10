import * as S from "./LayoutNavigation.styles";
import { Fragment } from "react";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";
const NAVIGATION_MENUS = [
  { name: "라이브게시판", page: "/boards" },
  { name: "파이어베이스", page: "/myfirebase" },
  { name: "라이브상품", page: "/markets" },
  { name: "마이페이지", page: "/mypages" },
];

export default function LayoutNavigationPresenter(
  props: ILayoutNavigationUIProps
) {
  return (
    <>
      <S.Wrapper>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={props.onClickMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.Wrapper>
    </>
  );
}
