import LayoutHeaderPresenter from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
export default function LayoutHeaderContainer() {
  const router = useRouter();

  const onClickLogo = () => {
    void router.push("/boards");
  };

  const onClickLogin = () => {
    void router.push("/login");
  };
  return (
    <>
      <LayoutHeaderPresenter
        onClickLogo={onClickLogo}
        onClickLogin={onClickLogin}
      />
    </>
  );
}
