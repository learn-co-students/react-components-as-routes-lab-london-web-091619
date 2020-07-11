import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map((director, index) => (
          <div key={index}>
            <strong>Director:</strong> {director.name}
              <br></br>
              <strong>Movies:</strong>
                  {director.movies.map(movie => (
                    <ul>
                      {movie}
                    </ul>
                  ))}
          </div>
        ))}
    </div>
  );
}

export default Directors
