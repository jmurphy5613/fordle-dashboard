import './App.css';
import axios from 'axios';
import { TextField } from '@mui/material';

function App() {
  return (
    <div className="root">
      <h1 className="main-title">Set the Fordle word</h1>
      <input placeholder="5 letter word"/>
    </div>
  );
}

export default App;
