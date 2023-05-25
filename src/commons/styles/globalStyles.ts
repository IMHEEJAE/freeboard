import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    // font-family: myfont;
  }
  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  // @font-face {
  //   font-family: "myfont";
  //   src: url("/fonts/scifibit.ttf");
  // }
  .ant-dropdown-menu {
    .ant-dropdown-menu-item {
      padding: 0 !important;
    }
  }
`;
