import React from 'react';
import HeaderUi from './components/HeaderUi';
import FooterUi from './components/FooterUi';
import LinkBuilder from './components/LinkBuilder';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderUi />
      <div>
        <LinkBuilder/>
      </div>
      <FooterUi />
    </div>
  );
}

export default App;
