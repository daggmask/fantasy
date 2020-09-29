import React from 'react';
import StartPage from './pages/startPage'
import "bootstrap/dist/css/bootstrap.css";
import WorldContextProvider from './ContextProviders/WorldContextProvider'

function App() {
  return (
    <div className="App">
      <WorldContextProvider>
        <StartPage/>
      </WorldContextProvider>
    </div>
  );
}

export default App;
