import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid black;
  margin: 100px;
  padding: 80px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  line-height: 52px;
`;
export const WriterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 60px;
`;
export const WriterBox = styled.div`
  width: 49%;
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 16px;
`;
export const Writer = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  box-sizing: border-box;
`;
export const Password = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  box-sizing: border-box;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
`;
export const InputWrapTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 40px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 480px;
  padding: 16px;
  border: 1px solid #bdbdbd;
`;
export const ZipWrap = styled.div`
  display: flex;
`;
export const ZipCode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-right: 16px;
  padding-left: 16px;
`;
export const ZipCodeBtn = styled.button`
  width: 124px;
  height: 52px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;
export const InputBox = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 20px;
`;
export const UploadWrap = styled.div`
  display: flex;
`;
export const UploadBox = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RadioWrap = styled.div`
  width: 100%;
  padding-top: 40px;
`;
export const RadioBtn = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
`;

export const SubmitWrap = styled.div`
  margin-top: 80px;
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 52px;
  box-sizing: border-box;
  border: none;
  background: #ffd600;
  color: #000;
  font-size: 16px;
`;
