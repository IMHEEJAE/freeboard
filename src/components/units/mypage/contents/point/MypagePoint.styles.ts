import styled from "@emotion/styled";
import { Tabs } from "antd";

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const TheadNumber = styled.th`
  padding: 16px 12px;
`;
export const TheadTh = styled.th`
  padding: 16px 12px;
  width: 25%;
`;
export const TheadTitle = styled.th`
  padding: 16px 12px;
`;
export const Tbody = styled.tbody``;
export const TbodyNumber = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
`;
export const TbodyTitle = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const TbodyTh = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 14px;
`;
export const TbodyThRed = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: normal;
  color: red;
`;
export const TbodyThBlue = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: normal;
  color: #091e6f;
`;
export const Bottom = styled.div``;
export const Tab = styled(Tabs)`
  padding: 0 0 20px;
  .ant-tabs-nav {
    width: auto;
  }
`;
