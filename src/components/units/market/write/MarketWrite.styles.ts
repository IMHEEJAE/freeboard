import dynamic from "next/dynamic";
import styled from "@emotion/styled";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
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
export const FormWrap = styled.div`
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 16px;
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin: 20px 0 10px;
`;
export const Quill = styled(ReactQuill)`
  .ql-container.ql-snow {
    height: 200px;
  }
`;

export const MapWrap = styled.div`
  display: flex;
`;
export const MapBox = styled.div``;
export const MapImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  margin-right: 26px;
`;
export const MapDesc = styled.div`
  width: 100%;
`;
export const ImgWrap = styled.div``;
export const ImgBox = styled.div`
  display: flex;
`;
export const Gps = styled.div`
  display: flex;
  align-items: center;
`;
export const GpsLat = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  box-sizing: border-box;
`;
export const GpsIcon = styled.img`
  margin: 0 10px;
`;
export const Address = styled.div`
  width: 100%;
`;
export const PT20 = styled.div`
  display: block;
  padding-top: 20px;
`;
