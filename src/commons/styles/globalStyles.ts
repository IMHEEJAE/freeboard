import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "MFL";
  }
  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @font-face {
    font-family: "MFL";
    src: url("/fonts/SB_aggro_L.ttf");
  }
  @font-face {
    font-family: "MFM";
    src: url(/font/SB_aggro_M.ttf);
  }
  @font-face {
    font-family: "MFB";
    src: url(/font/SB_aggro_B.ttf);
  }

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
// const color = {
//   primary: "#091E6F",
//   secondary: " #E8E298",
//   white: "#E0DCD0",
//   red: "#BA664C",
//   gray: '#E5E5E5',
// };
