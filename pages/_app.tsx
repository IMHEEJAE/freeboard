// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";
// import { useRouter } from "next/router";
// import Login from "./login";
import { RecoilRoot } from "recoil";

// const IS_LOGIN = ["/login"];

function App({ Component }: AppProps) {
  // const router = useRouter();
  // const isLogin = IS_LOGIN.includes(router.asPath);

  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Global styles={globalStyles} />
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default App;
