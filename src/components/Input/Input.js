import {React, useState} from 'react';

function Input() {

  const [input, setInput] = useState('');

  return(
  <div>
    <form 
    className="guess-input-wrapper"
    onSubmit={e =>{
      e.preventDefault();
      console.log({input});

    }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      id="guess-input"
      value={input}
      minLength={5}
      maxLength={5}
      onChange={e => {
        setInput(e.target.value.toUpperCase());
      }} 
      type="text" />
    </form>
  </div>
  )
}

export default Input;
