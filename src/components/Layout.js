import React, { Component } from 'react';

import '../scss/style.scss';

const Layout = props => (
  <div className="main-container">
    <header className="header">
      <div className="container-bg">
        <div className="logo">
          <div className="circle">JS</div>
          Jonh Snow
        </div>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Calendar</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div className="content">
      <h1>Sticky Footer with Flexbox</h1>
      <p>
        <button id="add">Add Content</button>
      </p>
    </div>

    <footer className="footer">
      <div className="container-bg">
        <div className="copy">© 2017 Something.</div>
        <nav>
          <ul className="menu">
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Status</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
);

export default Layout;
