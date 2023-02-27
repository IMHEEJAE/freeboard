import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;
export const Card = styled.div`
  padding: 80px 100px 100px 100px;
  box-shadow: 0px 0px 10px gray;
`;
export const BoardList = styled.div``;
export const BoardTable = styled.table`
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Td = styled.td``;
export const Th = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
`;
export const ThTitle = styled.th`
  padding: 14px 12px;
  border-top: 1px solid #bdbdbd;
  font-weight: 400;
  :hover {
    font-weight: bold;
    color: red;
    cursor: pointer;
  }
`;
export const ThHeaderNum = styled.th`
  width: 200px;
  padding: 16px 12px;
`;
export const ThHeaderTitle = styled.th`
  width: 600px;
`;
export const ThHeaderWriter = styled.th`
  width: 200px;
`;
export const ThHeaderDate = styled.th`
  width: 200px;
`;
export const TBody = styled.tbody``;
export const BoardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const EditBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  background: transparent;
  padding: 10px 16px;
  cursor: pointer;
  :hover {
    background: #eee;
  }
`;
export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
