import { useRouter } from "next/router";

import styled from "@emotion/styled";
import LayoutFooterContainer from "./footer/LayoutFooter.container";
import LayoutNavigationContainer from "./navigation/LayoutNavigation.container";
import LayoutBannerContainer from "./banner/LayoutBanner.container";
import LayoutHeaderContainer from "./header/LayoutHeader.container";

// const HIDDEN_HEADERS = ["/PATH"];
const Body = styled.div`
  // height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
const HIDDEN_HEADER = ["/login", "/login/regist"];
const HIDDEN_BANNER = ["/login", "/login/regist"];
const HIDDEN_NAVIGATION = ["/login", "/login/regist"];
const HIDDEN_FOOTER = ["/login", "/login/regist"];
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log("router.asPath", router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeaderContainer />}
      {!isHiddenBanner && <LayoutBannerContainer />}
      {!isHiddenNavigation && <LayoutNavigationContainer />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooterContainer />}
    </>
  );
}
