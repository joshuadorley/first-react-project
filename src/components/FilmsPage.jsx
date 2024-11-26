import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/filmHelpers";

const films = [
  { title: "Castle in the Sky", director: "Hayao Miyazaki", release_date: "1986", rt_score: "95", id: 1 },
  { title: "Grave of the Fireflies", director: "Isao Takahata", release_date: "1988", rt_score: "97", id: 2 },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki", release_date: "1988", rt_score: "93", id: 3 },
];

function FilmsPage() {
  const [searchDirector, setSearchDirector] = useState("");

  const directors = getListOf(films, "director");
  const filteredFilms = filterFilmsByDirector(films, searchDirector);
  const { total, avg_score, latest } = getFilmStats(filteredFilms);

  return (
    <div>
      <h1>Films</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="director">Filter by Director:</label>
          <select
            id="director"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All Directors</option>
            {directors.map((director) => (
              <option key={director} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>

      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>

      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;