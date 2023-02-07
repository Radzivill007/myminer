import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SEO from './SEO'
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout(props: any) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SEO title={props.title} description={props.description} keywords={props.keywords || []} />
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
