import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('/api/posts').then(res => res.json()).then(data => setPosts(data)).catch(error => console.error(error))
  }, [])

  return (
    <>
    <Head>
      <title>데모 블로그</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
      <h1>데모 블로그</h1>
    </header>
    <ul>
      {posts.length > 0 ?posts.map(({
        title,
        slug,
        releasedAt,
        _id,
      }) => {
        const localeDate = new Date(releasedAt)
        const yyyy = localeDate.getFullYear()
        const MM = localeDate.getMonth() + 1
        const dd = localeDate.getDate()
        const hh = localeDate.getHours()
        const mm = localeDate.getMinutes()
        const dateTimeStr = `${yyyy}년 ${MM}월 ${dd}일 ${hh}시 ${mm}분`

        return <li key={`post-${_id}`}>
          <h2><a href={`/posts/${slug?.current}/`}>{title} - {dateTimeStr}</a></h2>
        </li>
      }): <h2>now loading...</h2>}
    </ul>
    </>
  )
}
