function HomePage() {
    return (
      <div>
        <h1>My Movie Watchlist</h1>
        <form>
          <label htmlFor="movieInput">Add a Movie:</label>
          <input type="text" id="movieInput" placeholder="Movie title" />
          <button type="submit">Add</button>
        </form>
        <ul>
          <li>Inception</li>
          <li>Interstellar</li>
          <li>The Matrix</li>
          <li>The Godfather</li>
        </ul>
      </div>
    );
  }
  
  export default HomePage;