import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Notifications } from "@mantine/notifications";

import { Navbar, Footer } from "@/components";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo title="Breast Society Of Ghana" description="" />

      <Navbar />

      <main className="min-h-screen">
        <Component {...pageProps} />
        <Notifications position="bottom-left" />
      </main>

      <Footer />
    </>
  );
};

export default App;
