import { useEffect, useState } from "react"

export const useTeams = (APIKey: string, CountryId: string) => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
          fetch(
            `https://soccer.sportmonks.com/api/v2.0/countries/${CountryId}/teams?api_token=${APIKey}`,
            {
              method: "GET",
            }
          )
            .then((res) => res.json())
            .then((response) => {
                setTeams(response.data);
            })
            .catch((error) => console.log(error));
      }, []);

      return teams;
}

export default useTeams;