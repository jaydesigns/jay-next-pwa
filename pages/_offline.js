import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import hjiIcon from '../public/icon-512x512.png'

const Index = () => {
  return (
    <>
      <Head>
        <title>Heber Jay Indino</title>
        <meta name="description" content="Graphic Designer & Creative Developer who can help you with your branding and web design & development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      src={hjiIcon} alt='logo'
      width={200}
      height={200} />
      <Image
      src="https://res.cloudinary.com/dwupnysam/image/upload/v1673131749/Portfolio/PXL_20221231_225926099_2_wggjhq.jpg"
      alt='logo'
      width={200}
      height={200} />
      <main>
        <h1 className={styles.switzer}>I&apos;m currently building this web app. Follow my socials below to watch the progress.</h1>
        <Link className={styles.linkUnderline} href='https://instagram.com/jay.indino' target="_blank">Instagram</Link>
        <Link className={styles.linkUnderline} href='https://www.linkedin.com/in/jay-indino-designer' target="_blank">Linkedin</Link>
      </main>
    </>
  )
}

export default Index
