import { useForm } from "react-hook-form";
import MarketWritePresenter from "./MarketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./MarketWrite.types";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import {
  IMutation,
  IMutationCreateUseditemArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { FETCH_USEDITEMS } from "../list/MarketList.queries";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";


const schema = yup.object({
  name: yup.string().required("작성자를 입력해주세요"),
  remarks: yup.string().required("제목을 입력해주세요"),
  contents: yup.string().required("제목을 입력해주세요"),
  price: yup.string().required("내용을 입력해주세요"),
});

export default function MarketWriteContainer() {
  const router = useRouter();
  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USEDITEM);
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onClickSubmit = async (data: IFormData) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: data.price,
          },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEMS,
            variables: { useditemId: router.query.boardId },
          },
        ],
      });
      console.log("result", result);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };
  return (
    <>
      <MarketWritePresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        setValue={setValue}
        trigger={trigger}
        onClickSubmit={onClickSubmit}
        onChangeContents={onChangeContents}
      />
    </>
  );
}
