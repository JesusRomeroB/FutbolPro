import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTeams } from '../useTeams';
import { Team, Teams } from '@futbol-pro/types';
import { TeamList } from '@futbol-pro/types';
import Link from 'next/Link';

const APIKey = 'kE8eu5JQfIptrIHjoUk3OXdh2vkkGbku1ZdTjymuSEr63YNDyukaVxK1wkXW';
/* eslint-disable-next-line */
export interface PaisProps {}

const StyledPais = styled.div`
  color: pink;
`;

export function TeamsList(props: TeamList) {
  const { countryName } = props;
  const teams: any[] = useTeams(countryName);
  return (
    <StyledPais>
      {teams && teams.length > 0 ? (
        teams.map((team) => (
          <li key={team.team.id}>
            {team.team.id} - {team.team.name} -{' '}
            <Link href='/about'>
              <img src={team.team.logo}></img>
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
