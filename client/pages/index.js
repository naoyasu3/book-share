import Head from 'next/head';
import BaseLayout from '../components/Layout/BaseLayout';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Book Share</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <BaseLayout></BaseLayout>
    </div>
  );
}
