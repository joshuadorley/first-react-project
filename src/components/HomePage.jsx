import { useState } from 'react';

function HomePage() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
  
    return (
      <div>
        <h1>My Movie Watchlist</h1>
        {}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (text.trim()) {
              setList([...list, text]);
              setText('');
            }
          }}
        >
          <label htmlFor="movieInput">Add a Movie:</label>
          <input
            type="text"
            id="movieInput"
            placeholder="Movie title"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
  
        {}
        <ul>
          {list.map((element, index) => (
            <li key={index}>
              {element}
              <button
                onClick={() =>
                  setList(list.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HomePage;