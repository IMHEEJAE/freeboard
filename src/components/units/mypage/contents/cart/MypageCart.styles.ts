import styled from "@emotion/styled";
import { isTab } from "./MypageCart.types";
export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Tab = styled.ul`
  display: flex;
`;
export const TabSold = styled.li`
  margin-right: 20px;
  cursor: pointer;
  color: ${(props: isTab) => (props.isTab ? "black" : "#1d267d")};
  font-weight: ${(props: isTab) => (props.isTab ? "normal" : "bold")};
`;
export const TabPick = styled.li`
  cursor: pointer;
  color: ${(props: isTab) => (props.isTab ? "#1d267d" : "black")};
  font-weight: ${(props: isTab) => (props.isTab ? "bold" : "normal")};
`;
export const Search = styled.div``;
export const TableWrap = styled.div``;
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
export const TheadTitle = styled.th`
  width: 40%;
`;
export const TheadSold = styled.th``;
export const TheadPrice = styled.th``;
export const TheadDay = styled.th``;
export const TheadSeller = styled.th``;
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
export const TbodySold = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 14px;
  color: red;
`;
export const TbodyPrice = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
`;
export const TbodyDay = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
`;
export const TbodySeller = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
`;
export const Bottom = styled.div``;
