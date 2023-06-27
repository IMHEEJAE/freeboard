import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { accessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import Head from "next/head";
import { useEffect } from "react";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
  children: JSX.Element;
}
const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    // 로컬스토리지에 저장
    if (localStorage.getItem("refreshToken"))
      void getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              // eslint-disable-next-line @typescript-eslint/no-base-to-string
              authorization: `Bearer  ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink, errorLink]),
    cache: GLOBAL_STATE, // 페이지 전환(_APP.tsx리랜더) 되어도 캐시 유지!!
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
