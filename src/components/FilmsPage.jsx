import { useState, useEffect } from 'react';
import './FilmsPage.css';

function FilmsPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {

    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch films');
        return response.json();
      })
      .then((data) => setFilms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="films-page">
      <h1>Studio Ghibli Movies</h1>
      <ul>
        {films.map((film) => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;