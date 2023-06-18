import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>An Amazing Blog Post | My Website</title>
    </Head>
    <header>
      <div className="container">
        <h1>가나다라 마바사</h1>
        <p>
          <small
            >By <em>Stephanie Eckles</em> | Posted on:
            <em>02/02/2020</em></small
          >
        </p>
      </div>
    </header>
    <main>
      <article className="container">
        <h2>Topic Introduction</h2>
        <p>
          Liquorice soufflé jelly cake. Candy canes ice cream biscuit marzipan.
          Macaroon pie sesame snaps jelly-o.
        </p>
        <p>
          Candy canes ice cream <strong>biscuit</strong> marzipan. Macaroon pie sesame snaps
          jelly-o.
        </p>
        <h2>The Main Topic</h2>
        <p>
          Liquorice candy <mark>macaroon</mark> soufflé jelly cake. <em>Macaroon</em> pie sesame snaps
          jelly-o.
        </p>
        <p><span className="strike">Macaroon pie</span> sesame snaps jelly-o.</p>
        <h3>A subtopic to the main one</h3>
        <p>
          Liquorice candy <a href="#">macaroon soufflé</a> jelly cake. Candy canes ice cream
          biscuit marzipan. <span className="underline">Macaroon pie sesame</span> snaps jelly-o.
        </p>
        <p>
          Candy canes ice cream biscuit marzipan. Macaroon pie sesame snaps
          jelly-o.
        </p>
        <blockquote>
          <p>"Here's a fabulous thing someone said."</p>
          <footer><cite>Someone Awesome</cite></footer>
        </blockquote>
        <div className="link">
          <a href="/">Home으로 이동하기</a>
        </div>
      </article>
    </main>
    <footer>
      <div className="container">
        <p>&copy; 2020 ACME Company</p>
      </div>
    </footer>
    </>
  )
}
