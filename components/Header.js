import Link from 'next/link'

export default () => (
  <div>
    <Link href="/">
      <a className="title"> BBC A - Z Programme Search</a>
    </Link>
    <style jsx global>{`
      body {
        text-align: center;
        padding: 10px;
        background: #252525;
        margin: 0 auto;
        width: 70%;
        min-width: 220px;
      }

      a{
        text-decoration: none;
        color: white;
      }

      a:hover  {
        color: #f54997;
      }

      .container {
        text-align: center;
        padding: 10px;
        background: #252525;
        margin: 0 auto;
        width: 70%;
        min-width: 220px;
      }
    `}</style>

    <style jsx>{`
      .title {
        position: relative;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 25px;
        padding: 10px;
        font-size: 30px;
      }
      `}</style>
  </div>
)
