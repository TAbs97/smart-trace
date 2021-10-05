import React from 'react';
import Profile from './Profile';
import Report from './Report';
import Settings from './Settings';
import ContactUs from './ContactUs';
import Registration from './Registration';
import Email from './Email';
import IdNumber from './IdNumber';
import Tab from './Tabs';
import TrackTrace from './TrackNTrace';
import Store from './OnlineStore';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Nav from './Nav';

const Homepage = ({ handleLogout, openMenu, closeMenu }, props) => {
  const { email, setEmail } = props;
  return (
    <div>
        <Nav />
      <section className="container hero">
        <BrowserRouter>
          <main className="main">
            <div className="content">
              <switch>
                <Route path="/" exact={true} component={Tab} />
                <Route
                  path="/trackNtrace"
                  exact={true}
                  component={TrackTrace}
                />
                <Route path="/profile" exact={true} component={Profile} />
                <Route path="/settings" exact={true} component={Settings} />
                <Route path="/report" exact={true} component={Report} />
                <Route path="/contactUs" exact={true} component={ContactUs} />
                <Route
                  path="/registration"
                  exact={true}
                  component={Registration}
                />
                <Route path="/email" exact={true} component={Email} />
                <Route path="/identity" exact={true} component={IdNumber} />
                <Route path="/store" exact={true} component={Store} />
              </switch>
            </div>
          </main>
        </BrowserRouter>
      </section>
      <footer className="footer">All rights reserved.</footer>
    </div>
  );
};
export default Homepage;
