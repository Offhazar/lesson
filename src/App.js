import React, { useCallback, useEffect } from 'react';

import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';
import { findAllInRenderedTree } from 'react-dom/test-utils';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLOding, setIsloding] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsloding(true);
    setError(null);
    try {
      const response = await fetch(
        'https://rect-http-test-default-rtdb.firebaseio.com/movies.json'
      );
      if (!response.ok) {
        throw new Error(`Error ${response.ok}`);
      }
      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingTtext: data[key].openingTtext,
          realseDate: data[key].realseDate,
        });
      }

      // const transormedMovies = data.result.map((movieData) => {
      //   return {
      //     id: movieData.properties.episode_id,
      //     title: movieData.properties.title,
      //     openingText: movieData.properties.opening_crawl,
      //     releaseDate: movieData.properties.release_date,
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }

    setIsloding(false);
  }, []);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    setIsloding(true);
    const response = await fetch(
      'https://rect-http-test-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    const data = await response.json();
    setIsloding(false);
    console.log(data);
  }

  let content = <p>Found no movies...</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLOding) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
