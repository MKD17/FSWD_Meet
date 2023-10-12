import React from 'react';
import usePublicApiData from './components/usePublicApiData';

function App() {
  const apiUrl = 'https://randomuser.me/api/?results=5';
  const { data, loading } = usePublicApiData(apiUrl);

  return (
    <div>
      <h1>Random User Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((user, index) => (
            <li key={index}>
              {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
