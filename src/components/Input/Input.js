import {React, useState} from 'react';
import GuessList from '../GuessList/GuessList';

function Input() {

  const [input, setInput] = useState('');
  const [guesses, setGuesses] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log({input});

    setGuesses([...guesses, input])
    console.log(guesses);
  }

  return(
  <div>
    <div class="guess-results">
     <GuessList
      guesses={guesses}
     />
    </div>
    <form 
    className="guess-input-wrapper"
    onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      id="guess-input"
      value={input}
      minLength={5}
      maxLength={5}
      // pattern="[a-zA-Z] {5}"
      title='5 letter word'
      onChange={e => {
        setInput(e.target.value.toUpperCase());
      }} 
      type="text" />
    </form>
  </div>
  )
}

export default Input;
