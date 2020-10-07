import React from 'react';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
