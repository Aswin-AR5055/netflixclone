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
      <h1>🎬 Netflix Clone</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', }}>
        {movies.map(movie => (
          <div key={movie.id} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
            <img src={movie.poster} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3>{movie.title}</h3>
            <p>{movie.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
