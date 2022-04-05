import Head from 'next/head'
import { useRouter } from 'next/router'

import Sidebar from '@/components/bars/Sidebar'
import Topbar from '@/components/bars/Topbar'
import Bottombar from '@/components/bars/Bottombar'

export default function Container(props: any) {
  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Sentient',
    description: `Decentralized, open source, and free.`,
    image: 'https://sentient.vercel.app/static/images/banner.png',
    keywords: 'Decentralized, open source',
    type: 'website',
    ...customMeta,
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="keywords" content={meta.keywords} />
        <meta
          property="og:url"
          content={`https://sentient.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://sentient.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sentient" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@imarikchakma" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="flex w-screen">
        <Sidebar />
        <div className="flex-grow">
          <Topbar />
          {children}
        </div>
        <Bottombar />
      </main>
    </div>
  )
}
