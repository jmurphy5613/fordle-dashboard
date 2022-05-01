import './App.css';
import axios from 'axios';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {

  const [currentWord, setCurrentWord] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    axios.get('https://fordle.herokuapp.com/words/currentWord').then(res => {
      setCurrentWord(res.data.word);
    })
  }, []);

  const addWord = () => {
    axios.post('https://fordle.herokuapp.com/words/setCurrentWord', {
      word: inputValue
    }).then(res => {
      setCurrentWord(res.data.word);
      console.log(res.data);
    })
  }

  return (
    <div className="root">
      <h1 className="main-title">Set the Fordle word</h1>
      <input placeholder="5 letter word" onChange={e => setInputValue(e.target.value)} />
      <h1 className="word-title">{`Current word: ${currentWord}`}</h1>
      <Button 
        variant='contained' 
        onClick={addWord}
        sx={{
          textTransform: 'none',
          fontFamily: 'Inter',
        }}
      >Submit</Button>
    </div>
  );
}

export default App;
