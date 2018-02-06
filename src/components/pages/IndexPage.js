import React, { Component } from 'react';
import Layout from '../Layout';
import Card from '../Card';

import { instructions } from '../../mock/instructions';

const getInstructions = () =>
  instructions.map(({ id, ...restProps }) => <Card key={id} {...restProps} />);

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Ameen Merchant App</h1>
      {getInstructions()}
    </div>
  </Layout>
);

export default IndexPage;
