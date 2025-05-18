
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Beni Chatbot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Hello, Beni!</h1>
      <p>This is your chatbot prototype. Everything is ready for Vercel.</p>
    </div>
  );
}
