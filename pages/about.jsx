import Head from "next/head"
import Link from "next/link"
function about() {
  return (
    <>
    <Head>
      <title>page About</title>
      <meta name="desc" content="bla bla"/>
    </Head>
    <h1>This is about</h1>
    <Link href='/'>Retour</Link>
    </>
  )
}

export default about