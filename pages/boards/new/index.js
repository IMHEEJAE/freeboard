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
  ErrorMessage,
  RadioLabel,
  SubmitWrap,
  SubmitBtn,
  UploadBox,
  InputBox,
  Password,
  Textarea,
  ZipCodeBtn,
} from "@/styles/emotion";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function BoardWriteUI() {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [title, setTitle] = useState();
  const [titleError, setTitleError] = useState();
  const [content, setContent] = useState();
  const [contentError, setContentError] = useState();
  const [createBoard] = useMutation(CREATE_BOARD);
  const router = useRouter();

  const onChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
    if (event.target.value !== "") {
      setContentError("");
    }
  };
  const handleSubmit = async () => {
    if (!name) {
      setNameError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!content) {
      setContentError("내용을 입력해주세요.");
    }
    if (name && password && title && content) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password,
              title,
              contents: content,
            },
          },
        });
        console.log(result.data.createBoard._id);
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <>
      <Wrapper>
        <Title>게시글 등록</Title>
        <WriterWrap>
          <WriterBox>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeName}
            />
            <ErrorMessage>{nameError}</ErrorMessage>
          </WriterBox>
          <WriterBox>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 적어주세요."
              onChange={onChangePassword}
            />
            <ErrorMessage>{passwordError}</ErrorMessage>
          </WriterBox>
        </WriterWrap>
        <InputWrap>
          <Label>제목</Label>
          <Writer
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeTitle}
          />
          <ErrorMessage>{titleError}</ErrorMessage>
        </InputWrap>
        <InputWrap>
          <Label>내용</Label>
          <Textarea
            placeholder="내용을 작성해주세요."
            onChange={onChangeContent}
          />
          <ErrorMessage>{contentError}</ErrorMessage>
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
          <SubmitBtn onClick={handleSubmit}>등록하기</SubmitBtn>
        </SubmitWrap>
      </Wrapper>
    </>
  );
}
