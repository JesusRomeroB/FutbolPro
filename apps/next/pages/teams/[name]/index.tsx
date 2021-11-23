import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Ui } from '@futbol-pro/ui';
import Link from 'next/Link';
import  TeamsList  from '../../../app/team/team';

/* eslint-disable-next-line */
export interface TeamsProps {}

const StyledTeams = styled.div`
  color: pink;
`;

export function Teams(props: TeamsProps) {
  const router = useRouter();
  const { name } = router.query;
  const pathname = window.location.pathname;
  return (
    <StyledTeams>
      <Ui title="Buenas chavales estos son los teams" showTitle={true} />
      <TeamsList countryName={name.toString()}/>
    </StyledTeams>
  );
}

export default Teams;
