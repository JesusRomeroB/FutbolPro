import { useEffect, useState } from "react"

export const useFutbol = (APIKey: string) => {
    const [futbol, setFutbol] = useState([]);
    useEffect(() => {
          fetch(
            `https://soccer.sportmonks.com/api/v2.0/countries/353/players?api_token=${APIKey}`,
            {
              method: "GET",
            }
          )
            .then((res) => res.json())
            .then((response) => {
                setFutbol(response.data);
            })
            .catch((error) => console.log(error));
      }, []);

      return futbol;
}

export default useFutbol;