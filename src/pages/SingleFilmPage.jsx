import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleFilmPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const getFilm = async () => {
      try {
        const response = await fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`);
        const result = await response.json();
        console.log(result);
        setItem(result);
      } catch (error) {
        console.error("Error fetching film:", error);
      }
    };

    getFilm();
  }, [id]);

  return (
    <div>
      <div>
        {item.image && (
          <img src={item.image} alt={`${item.title} Poster`} />
        )}
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and garnered
          a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default SingleFilmPage;