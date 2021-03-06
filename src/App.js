import React from 'react';
import './App.css';

import Layout from './hoc/Layout';
import Main from './containers/Main';

const App = () => {
  return (
    <Layout className='App'>
      <Main />
    </Layout>
  );
};

export default App;
