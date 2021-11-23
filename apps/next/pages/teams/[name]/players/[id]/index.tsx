import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Ui } from '@futbol-pro/ui';
import Link from 'next/Link';
import Player from "../../../../../app/futbol/futbol";

/* eslint-disable-next-line */
export interface PlayersProps {}

const StyledTeams = styled.div`
  color: pink;
`;

export function Players(props: PlayersProps) {
  const router = useRouter();
  const { id } = router.query;
  const pathname = window.location.pathname;
  return (
    <StyledTeams>
      <Ui title="Buenas chavales estos son los jugadores" showTitle={true} />
      <Link href="/about">About</Link>
      <Player teamId={id.toString()}/>
    </StyledTeams>
  );
}

export default Players;