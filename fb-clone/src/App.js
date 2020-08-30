import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="app__body">
          <Sidebar/>
        </div>
    </div>
  );
}

export default App;
