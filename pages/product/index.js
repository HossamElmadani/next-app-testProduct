import Head from "next/head"
import  Link  from "next/link"

export default function index(props) {
  return (
    <>
    <Head>
      <title>Products</title>
    </Head>

    <h1>which one product you want</h1>
    <li><Link href="/product/1">Product 1</Link></li>
    {/* {console.log(props)} */}

    {props.posts.map(post=>
    <div key={post.id}>
      <Link style={{textDecoration:'none',color:'black'}} 
        href={`/product/${post.id}`}> 
        Product {post.id}-{post.title}
      </Link>
    </div>
    )}    

    <Link href='/'>Retour</Link>
    </>
  )
}



export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}
