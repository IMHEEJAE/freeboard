import { ChangeEvent, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore/lite";

import { useRouter } from "next/router";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import MyfirebaseWritePresenter from "./MyfirebaseWrite.presenter";

export default function MyfirebaseWriteContainer() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  async function onClickSubmit() {
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { writer, title, contents });
    alert("게시물 등록에 성공!");
    void router.push("/myfirebase");
  }

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  return (
    <MyfirebaseWritePresenter
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
