import './index.css';
import Body from './Body.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import GoogleLoginPopup from './Components/Login/Login.jsx';

function App() {
  const [type, settype] = useState("Information Gathering");

  return (
    <Router>
      <div className="app-layout">
        <Header className="header" />
        <Body className="main" type={type}/>
        <GoogleLoginPopup />
      </div>
    </Router>
  );
}

export default App;
