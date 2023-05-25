import styled from "@emotion/styled";
export const Title = styled.h2`
  padding: 80px 0 40px;
`;
export const List = styled.ul`
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  min-width: 1200px;
  /* height: 100%; */
  margin: 0 auto;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #000;
  :last-child {
    border-bottom: none;
  }
`;
export const ListLeft = styled.div`
  display: flex;
`;
export const ListRigth = styled.div`    font-size: 24px;
line-height: 35px;
font-weight: 700;
}`;
export const Image = styled.div``;
export const ImageT = styled.img``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemTitle = styled.span`
  font-size: 24px;
  line-height: 35px;
`;
export const Desc = styled.span`
  color: #4f4f4f;
`;
export const Tags = styled.span`
  color: #bdbdbd;
  line-height: 24px;
  font-size: 14px;
`;
export const SellerWrap = styled.div`
  margin-top: 20px;
`;
export const Seller = styled.span``;
export const PickCount = styled.span``;
