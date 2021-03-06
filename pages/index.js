import React from 'react'
import Head from 'next/head'
import ArticleList from '../component/ArticleList';


export default function Home({articles}) {
  console.log(articles);
  return (
     <div>
       <Head>
         <title>Next Programing</title>
         <meta name="Next programing" content="this is next programing application"/>
       </Head>
       <h1>Welcome to Next</h1>
      <ArticleList articles={articles}/>
     </div>
  )
}

export const getStaticProps = async () => {
  const res =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json();

  return {
    props:{
      articles
    }
  }
}