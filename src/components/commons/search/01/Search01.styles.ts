import styled from "@emotion/styled";
import { Input } from "antd";
export const SearchWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
export const SearchBar = styled(Input)`
  width: 200px;
  :hover,
  :focus {
    border-color: #5729ff !important;
    box-shadow: none !important;
  }
`;
