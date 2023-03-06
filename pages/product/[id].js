import Head from "next/head"
import Link from "next/link"

export default function dinamicID(props) {
  // const rand = Math.floor(Math.random()*9)
  const {title,id,body}=props.post
  return (
    <>
    <Head>
      <title>Product items</title>
    </Head>
    {/* <h1>Product {rand}</h1> */}
    {/* <h1 className="text-primary">Product {id}</h1> */}
    <div>Product {id}</div>
    <div>{title}</div>
    <div>{body}</div>
    <Link href='/product'>Retour</Link>
    </>

  )
}

export async function getStaticPaths(){
  const res = await fetch('http://localhost:3000/api/posts');
  const data = await res.json();

const paths =data.map(d=> {
  return{
    params : {id : `${d.id}`}
  }
})

return {
  paths :paths,
  fallback : false,
}

}



export async function getStaticProps(context){
  const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
  const data = await res.json();
  console.log(context)

  return {
    props : {
      post :data
    }
  }
}
