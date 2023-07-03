import LayoutHeaderPresenter from "./LayoutHeader.presenter";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./LayoutHeader.queries";
import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
export default function LayoutHeaderContainer() {
  const router = useRouter();
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const onClickLogo = () => {
    void router.push("/");
  };

  const onClickLogin = () => {
    void router.push("/login");
  };
  const onClickLogout = async () => {
    try {
      const result = logoutUser({});
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <>
      <LayoutHeaderPresenter
        data={data}
        onClickLogo={onClickLogo}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
    </>
  );
}
