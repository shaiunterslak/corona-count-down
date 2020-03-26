import Head from 'next/head'

const Home = () => {
  let today = new Date()
  // Set time to one minute after midnight
  today.setHours(0, 1, 0, 0)

  //The official SA lockdown end date
  let lockdownEndDate = new Date('apr 16 2020')
  let timeDifference = Math.abs(lockdownEndDate.getTime() - today.getTime())

  //converts time difference to days left using formula from
  let daysLeft = Math.round(timeDifference / (1000 * 3600 * 24))

  let name = 'Shai'
  let instagramURL = 'https://instagram.com/shaiunterslak'
  let googleHangoutURL =
    'https://hangouts.google.com/call/Oe4XRZS_RCc7xRKhXVWGAEEI'
  let cellNumber = 'tel:' + '+27826374290' //your number here
  let imgurLink = 'https://imgur.com/a/cTfS1hU'

  return (
    <div className='container'>
      <Head>
        <title>{name} Count Down</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='title'>Days left: {daysLeft}</h1>

        <p className='description'>Until you can legally see {name}</p>

        <div className='grid'>
          <a href={instagramURL} target='_blank' className='card'>
            <h3>Look at his face &rarr;</h3>
            <p>Find expertly curated {name} content on his Instagram.</p>
          </a>

          <a href={googleHangoutURL} target='_blank' className='card'>
            <h3>Talk to his face &rarr;</h3>
            <p>Join this Google Hangout and let him know you're there.</p>
          </a>

          <a href={cellNumber} className='card'>
            <h3>Talk to his ear &rarr;</h3>
            <p>
              Cellphones are the next big thing. Give {name} a call anytime.
            </p>
          </a>

          <a href={imgurLink} target='_blank' className='card'>
            <h3>Look at his ear &rarr;</h3>
            <p>
              View a high resolution photo of {name}'s ear. For the bad days.
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        iframe {
          height: 200px;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
