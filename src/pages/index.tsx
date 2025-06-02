import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Will Gaither | Developer Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <Footer />
    </>
  );
}


