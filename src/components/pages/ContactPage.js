import React, { Component } from 'react';
import Layout from '../Layout';
import ContactCard from '../ContactCard';

import { contacts } from '../../mock/contact';

const getContacts = () =>
  contacts.map(({ id, ...restProps }) => (
    <ContactCard key={id} {...restProps} />
  ));

const ContactPage = () => (
  <Layout>
    <div>
      <h1>Contact us</h1>

      {getContacts()}
    </div>
  </Layout>
);

export default ContactPage;
