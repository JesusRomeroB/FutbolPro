import { useEffect, useState } from 'react';

export const useFutbol = (teamId: string) => {
  const [futbol, setFutbol] = useState([]);
  useEffect(() => {
    fetch(
      `https://api-football-v1.p.rapidapi.com/v3/players?team=${teamId}&season=2020`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '549f5ec5c5mshb0fd2a54b63e56ep1d2807jsn82c9a49dde7c',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setFutbol(response.response);
      })
      .catch((error) => console.log(error));
  }, []);

  return futbol;
};

export default useFutbol;
