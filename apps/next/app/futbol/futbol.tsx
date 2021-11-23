import styled from 'styled-components';
import { useFutbol } from '../useFutbol';
import { PlayerList } from '@futbol-pro/types';
/* eslint-disable-next-line */

const StyledFutbol = styled.div`
  color: pink;
`;

export function Futbol(props: PlayerList) {
  const { teamId } = props;
  const players: any[] = useFutbol(teamId);
  return (
    <StyledFutbol>
      {players && players.length > 0 ? (
        players.map((player) => (
          <li key={player.player.id}>
            {player.player.name}
            <img src={player.player.photo}></img>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </StyledFutbol>
  );
}

export default Futbol;
