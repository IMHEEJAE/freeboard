import styled from "@emotion/styled";
import { Input } from "antd";
export const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Searchbar = styled(Input)`
  position: absolute;
  top: -50px;
  right: 0;
  width: 200px;
  :hover,
  :focus {
    border-color: #d4adfc !important;
    box-shadow: none !important;
  }
`;
