import React from 'react';
import Layout from './shared/Layout';
import Hero from './hero/Hero';
import MainSection from './main/MainSection';
import Collection from './collection/Collection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <Collection />
      </Layout>
    </>
  );
};

export default HomePage;
