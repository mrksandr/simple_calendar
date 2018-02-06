import React, { Component } from 'react';
import Layout from '../Layout';
import ContactCard from '../ContactCard';

const ContactPage = () => (
  <Layout>
    <div>
      <h1>Contact us</h1>
      <ContactCard title="Twitter" icon="tw" />
      <ContactCard
        title="Email"
        icon="mail"
        to="mailto:alex.petrichkovich@gmail.com"
      />
      <ContactCard title="Facebook" icon="fb" />

      <ContactCard
        to="https://www.linkedin.com/in/oleksandr-petrichkovich/"
        title="Linkedin"
        icon="linked"
      />
      <ContactCard to="https://github.com/mrksandr" title="Github" icon="git" />
    </div>
  </Layout>
);

export default ContactPage;
