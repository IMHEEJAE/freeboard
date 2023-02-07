import {
  Title,
  Wrapper,
  InputWrap,
  Label,
  WriterBox,
  WriterWrap,
  InputWrapTop,
  ZipCode,
  Radio,
  UploadWrap,
  ZipWrap,
  Writer,
  RadioWrap,
  RadioBtn,
  RadioLabel,
  SubmitWrap,
  SubmitBtn,
  UploadBox,
  InputBox,
  Password,
  Textarea,
  ZipCodeBtn,
} from "@/styles/emition";

export default function BoardWriteUI() {
  return (
    <>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrap>
          <WriterBox>
            <Label>작성자..</Label>
            <Writer type="text" placeholder="이름을 적어주세요." />
          </WriterBox>
          <WriterBox>
            <Label>비밀번호</Label>
            <Password type="password" placeholder="비밀번호를 적어주세요." />
          </WriterBox>
        </WriterWrap>
        <InputWrap>
          <Label>제목</Label>
          <Writer type="text" placeholder="제목을 작성해주세요." />
        </InputWrap>
        <InputWrap>
          <Label>내용</Label>
          <Textarea placeholder="내용을 작성해주세요." />
        </InputWrap>
        <InputWrap>
          <Label>주소</Label>
          <ZipWrap>
            <ZipCode type="text" placeholder="07250" />
            <ZipCodeBtn>우편번호 검색</ZipCodeBtn>
          </ZipWrap>
          <InputBox />
          <InputBox />
        </InputWrap>
        <InputWrapTop>
          <Label>유튜브</Label>
          <Writer type="text" placeholder="링크를 복사해주세요." />
        </InputWrapTop>
        <InputWrapTop>
          <Label>사진첨부</Label>
          <UploadWrap>
            <UploadBox>+</UploadBox>
            <UploadBox>+</UploadBox>
            <UploadBox>+</UploadBox>
          </UploadWrap>
        </InputWrapTop>
        <RadioWrap>
          <Label>메인설정</Label>
          <RadioBtn type="radio" name="radio-button" />
          <RadioLabel>유튜브</RadioLabel>
          <RadioBtn type="radio" name="radio-button" />
          <RadioLabel>사진</RadioLabel>
        </RadioWrap>
        <SubmitWrap>
          <SubmitBtn>등록하기</SubmitBtn>
        </SubmitWrap>
      </Wrapper>
    </>
  );
}
