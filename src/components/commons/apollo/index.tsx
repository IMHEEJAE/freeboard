import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { withAuth } from "../hoc";
import Head from "next/head";

interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();

// function ApolloSetting(props: IApolloSettingProps) {
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const uploadLink = createUploadLink({
    // uri: "http://backendonline.codebootcamp.co.kr/graphql",
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_APP.tsx리랜더) 되어도 , 캐시 유지
  });
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9bbd257bacbf7b1e0519291e4f771ef5&libraries=services"
        ></script>
      </Head>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
// export default withAuth(ApolloSetting);
