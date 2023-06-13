import React, { ChangeEvent, useState } from "react";
import MapContainer from "./MapContainer";
import _ from "lodash";
import styled from "@emotion/styled";

const Desc = styled.span`
  font-size: 14px;
  color: red;
  margin-bottom: 5px;
`;
const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 5px;
  :hover,
  :focus {
    outline: none;
  }
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export default function LandingPage() {
  const [place, setPlace] = useState("");

  const getDebounce = _.debounce((value) => {
    setPlace(value);
  }, 500);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <MapContainer searchPlace={place} />
      <InputWrap>
        <Desc>※ 주소 검색 후 위도 경도를 입력해주세요</Desc>
        <Input placeholder="주소를 입력하세요" onChange={onChangeSearch} />
      </InputWrap>
    </>
  );
}
