import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Ui } from '@futbol-pro/ui';
import Link from 'next/Link';
import Player from '../../../../../app/futbol/futbol';

/* eslint-disable-next-line */
export interface PlayersProps {}

const StyledTeams = styled.div``;

export function Players(props: PlayersProps) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <StyledTeams>
      <Ui title="Lista de jugadores" showTitle={true} />
      {id? 
        <Player teamId={id.toString()} /> 
      : 
        <p>Loading</p>}
    </StyledTeams>
  );
}

export default Players;
