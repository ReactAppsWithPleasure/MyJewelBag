import React from 'react';
import Layout from './shared/Layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAligh: 'center'
  };

  return (
    <Layout>
      <p style={style}>We can't find that page!</p>
    </Layout>
  );
};

export default NotFound;
