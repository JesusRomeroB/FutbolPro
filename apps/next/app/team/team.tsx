import styled from 'styled-components';
import { useTeams } from '../useTeams';
import { Team } from '@futbol-pro/types';
import { TeamList } from '@futbol-pro/types';
import Link from 'next/Link';

const APIKey = 'kE8eu5JQfIptrIHjoUk3OXdh2vkkGbku1ZdTjymuSEr63YNDyukaVxK1wkXW';
/* eslint-disable-next-line */
export interface PaisProps {}

const StyledPais = styled.div`
  color: pink;
`;

export function TeamsList(props: TeamList) {
  const { CountryId } = props;
  const teams: any[] = useTeams(APIKey, CountryId);

  return (
    <StyledPais>
      <h1>Welcome to Pais!</h1>
      {teams && teams.length > 0 ? (
        teams.map((team: Team) => (
          <li key={team.id}>
            {team.id} - {team.name} -{' '}
            <Link href='/about'>
              <img src={team.logo_path}></img>
            </Link>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </StyledPais>
  );
}

export default TeamsList;
