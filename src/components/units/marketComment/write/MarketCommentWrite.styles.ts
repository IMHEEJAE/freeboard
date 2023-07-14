import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 10px 100px;
`;

export const WrapperTitle = styled.h2`
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

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
