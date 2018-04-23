import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MobileNavigation from './components/mobile-navigation/MobileNavigation';
import LandingPage from '../landing-page/LandingPage';
import About from '../about/About';
import Contacts from '../contacts/Contacts';
import FAQ from '../faq/FAQ';
import { Route } from 'react-router-dom';

export default class AppShell extends React.Component {
  render() {
    return (
      <div className="demo-layout-transparent mdl-layout mdl-js-layout">
        <Header />
        <MobileNavigation />
        <main className="mdl-layout__content">
          <Route exact path="/" component={LandingPage} />
          <Route path="/about/" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/faq" component={FAQ} />
          <Footer />
        </main>
      </div>
    );
  }
}
