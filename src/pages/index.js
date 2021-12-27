import Head from "next/head";

import * as FaIcons from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <FaIcons.FaGithub></FaIcons.FaGithub>
        </div>
        <h1 className=" text-red-700 text-3xl">Hello sdfs</h1>
      </main>
    </div>
  );
}
