import React from 'react';
import ClientList from './ClientList';
import DefaultNav from './DefaultNav';


const App = () => {
  return (<div className="App">
    <DefaultNav></DefaultNav>
    <ClientList></ClientList>
  </div>);
}

export default App;