import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/movies/')
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <img src="pngwing.com.png" className='logo-img' alt='Logo'/>
      <h2> Top Rated </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
            {/* Clicking the image opens trailer in new tab */}
            <a href={movie.trailer_url} target="_blank" rel="noopener noreferrer">
              <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '8px', cursor: 'pointer' }} />
            </a>
            <h3>{movie.title}</h3>
            <h4>{movie.rating}</h4>
            <p>{movie.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
