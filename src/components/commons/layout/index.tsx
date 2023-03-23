import { useRouter } from "next/router";

import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

// const HIDDEN_HEADERS = ["/PATH"];
const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log("router.asPath", router.asPath);

  // header 가 필요없는 경우.
  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {/* {isHiddenHeader && <LayoutHeader />} */}
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Body>{props.children}</Body>
      {/* <LayoutFooter /> */}
    </>
  );
}
