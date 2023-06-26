import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import PortableText from '@components/PortableText'

export default function Page({ slug }) {
  const [post, setPost] = useState(null)

  useEffect(() => {
    fetch(`/api/posts/${slug}`).then(res => res.json()).then(data => setPost(data)).catch(error => console.error(error))
  }, [slug])

  const dateTimeStr = useMemo(() => {
    if (!post) return
    const localeDate = new Date(post?.releasedAt)
    const yyyy = localeDate.getFullYear()
    const MM = localeDate.getMonth() + 1
    const dd = localeDate.getDate()
    const hh = localeDate.getHours()
    const mm = localeDate.getMinutes()
    return `${yyyy}년 ${MM}월 ${dd}일 ${hh}시 ${mm}분`
  }, [post])

  return <>
  <Head>
    <title>{post?.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta content={post?.metaDesc} name="description" />
    <meta content={post?.ogTitle || post?.title || ''} property="og:title" />
    <meta content={post?.ogDesc || post?.metaDesc || ''} property="og:description" />
    {post?.ogImg && <meta content={post?.ogImg} property="og:image" />}
  </Head>
  {
    post ? <>
      <header style={{ backgroundImage: `url(${post?.mainImg?.src || ''})`}}>
        <div className="container">
          <h1>{post?.title}</h1>
          <p>
            <span className="a11y-hidden">{post?.mainImg?.alt || ''}</span>
            <small>{dateTimeStr}</small>
          </p>
        </div>
      </header>
      <div className="container main-text">
        <PortableText value={post?.text} />
      </div>
      <footer>
        <div className="container">
          2023 &copy; Allstay alrights reserved
        </div>
      </footer>
    </> : <header style={{ backgroundImage: `url(${post?.mainImg?.src || ''})`}}>
      <div className="container">
        <h1>now loading...</h1>
      </div>
    </header>
  }
  </>
}


export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params?.slug?.[0],
    },
  }
}