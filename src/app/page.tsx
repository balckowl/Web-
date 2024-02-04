import { Metadata } from "next"
import Top from "./Top"

export const metadata: Metadata = {
  title: 'Frontend Typing Master',
  description: 'Webフロントエンドに関する用語のみで構成されたタイピングゲーム',
  openGraph: {
      title: 'Frontend Typing Master',
      description: 'Webフロントエンドに関する用語のみで構成されたタイピングゲーム',
      url: "https://webda-rho.vercel.app/",
      siteName: 'Frontend Typing Master',
      images: [
          {
              width: '1200',
              height: '675',
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