
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <Head>
        <title>Chatbot App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Welcome to Chatbot</h1>
      <p>This is the mobile-friendly chatbot prototype using classic Next.js pages.</p>
    </div>
  );
}
