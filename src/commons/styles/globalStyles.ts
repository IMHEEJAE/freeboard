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
  .ant-tabs-nav {
    width: 1200px;
    margin: 0 auto;
    ::before {
      border-bottom: none !important;
    }
    .ant-tabs-tab {
      padding: 5px 0;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
    }
  }
`;
