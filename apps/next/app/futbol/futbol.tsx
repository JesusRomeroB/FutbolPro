import styled from 'styled-components';
import { useFutbol } from '../useFutbol';
import { PlayerList } from '@futbol-pro/types';
import { PlayerCard, ItemsContainer } from '@futbol-pro/ui';
/* eslint-disable-next-line */

const StyledFutbol = styled.div`
  color: pink;
`;

export function Futbol(props: PlayerList) {
  const { teamId } = props;
  const players: any[] = useFutbol(teamId);
  return (
    <ItemsContainer>
      {players && players.length > 0 ? (
        players.map((player) => (
          <PlayerCard
            key={player.player.id}
            id={player.player.id}
            name={player.player.name}
            photo={player.player.photo}
          />
        ))
      ) : (
        <p>no data</p>
      )}
    </ItemsContainer>
  );
}

export default Futbol;
