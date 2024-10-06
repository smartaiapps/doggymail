import React from 'react';
import './App.css';
import doggyLogo from './icon.png';
import PrivacyPolicy from './PrivacyPolicy';

const App: React.FC = () => {
  return (
    <div className="App" style={{background:'#f5f5f5', padding:'3rem 0'}}>
      <img
      src={doggyLogo}
      alt='icon'
      style={{ width: '130px', height: '130px', margin:'.3rem auto 1rem auto', display: 'block' }}/>
      <div style={{width:'100%', maxWidth:'1050px', margin:'0 auto', background:'#ffffff', borderRadius:'1.5rem', boxShadow: '0 0 50px #00000010'}}>
        <PrivacyPolicy />
      </div>
    </div>
  );
};

export default App;
