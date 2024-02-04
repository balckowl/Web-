import { Metadata } from "next"
import Top from "./Top"

export const metadata: Metadata = {
  title: 'Frontend Type Master',
  description: 'Webフロントエンドに関する用語のみで構成されたタイピングゲーム',
  openGraph: {
      title: 'タイピングゲーム',
      description: 'Webフロントエンドに関する用語のみで構成されたタイピングゲーム',
      url: "https://webda-rho.vercel.app/",
      siteName: 'Frontend Type Master',
      images: [
          {
              width: '1200',
              height: '630',
              url: 'https://webda-rho.vercel.app/ogp.png'
          }
      ],
      locale: 'jp',
      type: 'website',
  }
}


const page = () => {
  return (
    <>
      <Top />
    </>
  )
}

export default page