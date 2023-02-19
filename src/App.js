import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const [switchText, setSwitchText] = useState('Enable')

  const toggleMode =() =>{
    if (mode === 'light'){
      setMode('dark');
    
      document.body.style.backgroundColor ='#313131';

      setSwitchText('Disable')

    }

    
    else{
      setMode('light');

      document.body.style.backgroundColor = 'white';

      setSwitchText('Enable')
    }
  }

  return (
    <>
    <Navbar title = "TextRefine" mode={mode} mode2={switchText} toggleMode={toggleMode}/>
    <div className="container my-3">
      <TextForm heading="Enter your text here to analyze" mode={mode}  toggleMode={toggleMode}/>  
    </div>
    </>
  );
}

export default App;
