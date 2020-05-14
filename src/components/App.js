import React from 'react';
import HeaderUi from './HeaderUi';
import FooterUi from './FooterUi';
import LinkBuilder from './LinkBuilder';
import MessageBuilder from './MessageBuilder';
import InformationBox from './InformationBox';
import {Columns} from 'react-bulma-components';
import '../assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <HeaderUi />
      <Columns>
        <Columns.Column className="two-thirds">
          <LinkBuilder/>
        </Columns.Column>
        <Columns.Column className="one-third">
          <InformationBox />
        </Columns.Column>
      </Columns>
      <FooterUi />
    </div>
  );
}

export default App;
