import React, { Component } from 'react';
import NavBarItem from './common/NavbarItem';

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
            <NavBarItem exact url="/">
              How it works
            </NavBarItem>
            <NavBarItem url="/calculator">Calendar</NavBarItem>
            <NavBarItem url="/about">Contact</NavBarItem>
          </ul>
        </nav>
      </div>
    </header>

    <main className="content">{props.children}</main>

    <footer className="footer">
      <div className="container-bg">
        <div className="copy">© 2017 Something.</div>
        <nav>
          <ul className="menu">
            <NavBarItem url="/not-exist">How it works</NavBarItem>
            <NavBarItem url="/not-exist">Terms</NavBarItem>
            <NavBarItem url="/not-exist">Privacy</NavBarItem>
            <NavBarItem url="/not-exist">Security</NavBarItem>
            <NavBarItem url="/not-exist">Status</NavBarItem>
            <NavBarItem url="/not-exist">Help</NavBarItem>
            <NavBarItem url="/not-exist">Contact</NavBarItem>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
);

export default Layout;
