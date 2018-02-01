import React, { Component } from 'react';
import Layout from '../Layout';
import Card from '../Card';

function encodeHTML(raw) {
  return raw.replace(
    /[\u00A0-\u9999<>\&]/gim,
    i => '&#' + i.charCodeAt(0) + ';',
  );
}

const IndexPage = () => (
  <Layout>
    <div>
      <h1>Ameen Merchant App</h1>

      <Card
        isOpen
        title="How to Setup"
        body="<p><strong>Step 1: </strong> git clone this repo</p><p><strong>Step 2: </strong> cd to the cloned repo</p><p><strong>Step 3: </strong> Install the Application with <span class=&quot;label&quot;>yarn</span> or <span class=&quot;label&quot;>npm i</span></p>"
      />
      <Card title="How to Run App" />
      <Card title="Standart compilant" />
      <Card
        title="How to Setup"
        body="<p><a href=&quot;&quot;>This project</a> uses react-native-config to expose config variables to your javascript code in React Native. You can store API keys and other sensitive information in a file: </p><div className=&quot;block-info&quot;><p>API_URL=https://myapi.com </p><p>GOOGLE_MAPS_API_KEY=abcdefgh</p></div>"
      />
    </div>
  </Layout>
);

export default IndexPage;
