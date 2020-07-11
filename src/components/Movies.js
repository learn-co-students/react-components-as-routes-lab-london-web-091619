import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
         <strong>Title:</strong> {movie.title}<br></br>
         <strong>Time:</strong> {movie.time}<br></br>
         {movie.genres.map(genre => (
           <ul>
             <li>{genre}</li>
           </ul>
         ))}
         <br></br>
        </div>
      ))}
    </div>
  );
};

export default Movies;
