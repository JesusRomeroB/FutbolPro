import styled from 'styled-components';
import {useFutbol} from "../useFutbol";
const APIKey = "kE8eu5JQfIptrIHjoUk3OXdh2vkkGbku1ZdTjymuSEr63YNDyukaVxK1wkXW";
/* eslint-disable-next-line */
 export interface FutbolProps {}

const StyledFutbol = styled.div`
  color: pink;
`;

export function Futbol(props: FutbolProps ) {
  const  players:any[]  = useFutbol(APIKey);
  return (
    <StyledFutbol>
      <h1>Lista de jugadores de Colombia</h1>
      {
        players && players.length > 0
        ?
          players.map( (player) => <li key={player.player_id}>{player.display_name}</li>)
        :
          <p>no data</p>
      }
    </StyledFutbol>
  );
}

export default Futbol;
