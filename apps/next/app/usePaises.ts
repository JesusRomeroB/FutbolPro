import { useEffect, useState } from "react"

export const usePaises = (APIKey: string) => {
    const [paises, setPaises] = useState([]);
    useEffect(() => {
          fetch(
            `https://soccer.sportmonks.com/api/v2.0/countries?api_token=${APIKey}`,
            {
              method: "GET",
            }
          )
            .then((res) => res.json())
            .then((response) => {
                setPaises(response.data);
            })
            .catch((error) => console.log(error));
      }, []);

      return paises;
}

export default usePaises;