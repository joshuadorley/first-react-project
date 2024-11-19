import React, { useState } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/filmHelpers";

const films = [
  { title: "Castle in the Sky", director: "Hayao Miyazaki" },
  { title: "Grave of the Fireflies", director: "Isao Takahata" },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
];

function FilmsPage() {
  const [searchDirector, setSearchDirector] = useState("");

  const filmsByDirector = filterFilmsByDirector(films, searchDirector);
  const directors = getListOf(films, "director");

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="formGroup">
          <label htmlFor="director-filter">Filter by Director:</label>
          <select
            id="director-filter"
            value={searchDirector}
            onChange={(e) => setSearchDirector(e.target.value)}
          >
            <option value="">All Directors</option>
            {directors.map((director, index) => (
              <option key={index} value={director}>
                {director}
              </option>
            ))}
          </select>
        </div>
      </form>
      <ul>
        {filmsByDirector.map((film, index) => (
          <li key={index}>{film.title} by {film.director}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsPage;