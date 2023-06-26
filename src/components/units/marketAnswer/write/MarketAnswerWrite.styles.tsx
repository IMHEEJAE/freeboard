import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 30px 100px 10px 150px;
  display: flex;
  display: flex;
  flex-direction: row;
`;

export const Arrow = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;

  width: 100%;
`;
export const MainContents = styled.div``;
export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  resize: none;
  :focus {
    outline: none;
  }
`;
export const CommentInfo = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CommentCountInput = styled.div`
  width: 1005px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-top: none;
`;
export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const ContentsLength = styled.div`
  width: 100%;
  height: 51px;
  line-height: 51px;
  padding-left: 20px;
  color: gray;
`;
export const Button = styled.button`
  width: 91px;
  height: 51px;
  background-color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;
