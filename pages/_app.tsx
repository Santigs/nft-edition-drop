import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 

    sdkOptions={{
      gasless: {
        biconomy: {
          apiKey: "<ru9eSvUtK.def6b7b9-170a-4688-8798-f79ba2016d45>",
          apiId: "<758876f9-0f1b-49bc-8f59-200d9c1a1aa1>",
        }
      },
    }}
    
    
    activeChain={activeChainId}> 
      <Head>
        <title>thirdweb Edition Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's Edition Drop contract and create a customizable Edition Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb Edition drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
      {/* <ThirdwebGuideFooter /> */}
    </ThirdwebProvider>
    
  );
}

export default MyApp;
