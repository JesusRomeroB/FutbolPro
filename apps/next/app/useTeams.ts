import { useEffect, useState } from 'react';

export const useTeams = (countryName: string) => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const teamFetch = async () => {
      await fetch(
        `https://api-football-v1.p.rapidapi.com/v3/teams?country=${countryName}`,
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
          setTeams(response.response);
        })
        .catch((error) => console.log(error));
    };
    teamFetch();
  }, []);

  return teams;
};

export default useTeams;
