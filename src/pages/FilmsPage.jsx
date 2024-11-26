import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/filmHelpers";

const films = [
  { id: 1, title: "Castle in the Sky", director: "Hayao Miyazaki", rt_score: "95", release_date: "1986" },
  { id: 2, title: "My Neighbor Totoro", director: "Hayao Miyazaki", rt_score: "93", release_date: "1988" },
  { id: 3, title: "Grave of the Fireflies", director: "Isao Takahata", rt_score: "94", release_date: "1988" },
];

const FilmsPage = () => {
  const [searchDirector, setSearchDirector] = useState("");

  const filteredFilms = filterFilmsByDirector(films, searchDirector);
  const directors = getListOf(films, "director");
  const { avg_score, total, latest } = getFilmStats(filteredFilms);

  return (
    <div>
      <h1>Films</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="directorFilter">Filter by Director:</label>
          <select
            id="directorFilter"
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

      {/* Film Stats */}
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

      {/* Film List */}
      <ul>
        {filteredFilms.map((film) => (
          <li key={film.id}>
            <Link to={`/film/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsPage;