import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        {actors.map(actor => (
          <div>
            <strong>Actor: </strong>{actor.name} <br></br>
            <strong>Movies:</strong> {actor.movies.map(movie => (
              <ul>
                <li>{movie}</li>
              </ul>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Actors;
