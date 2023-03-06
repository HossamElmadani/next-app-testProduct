// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
      typeof document !== undefined
        ? require("bootstrap/dist/js/bootstrap")
        : null;
    }, [router.events]);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
