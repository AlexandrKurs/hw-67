import React from 'react';
import './App.css';
import PasswordKeyboard from './components/PasswordKeyboard/PasswordKeyboard.tsx';


const App: React.FC = () => {
  return (
    <div className="App">
      <PasswordKeyboard />
    </div>
  );
}

export default App;