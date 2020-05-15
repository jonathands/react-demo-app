import React from 'react';
import HeaderUi from './HeaderUi';
import FooterUi from './FooterUi';
import LinkBuilder from './LinkBuilder';
import MessageBuilder from './MessageBuilder';
import '../assets/styles/App.scss';

function App() {
  return (
    <div className="app container is-fullwidth">
      <HeaderUi />
      <div className="columns">
        <div className="column">
          <LinkBuilder/>
        </div>
      </div>
      <FooterUi />
    </div>
  );
}

export default App;
