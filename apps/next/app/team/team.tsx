import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTeams } from '../useTeams';
import { Team, Teams } from '@futbol-pro/types';
import { TeamList } from '@futbol-pro/types';
import { TeamCard, ItemsContainer } from '@futbol-pro/ui';
import Link from 'next/link';

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
    <ItemsContainer>
      {teams && teams.length > 0 ? (
        teams.map((team) => (
          <TeamCard
            key={team.team.id}
            id={team.team.id}
            name={team.team.name}
            logo={team.team.logo}
            countryName={countryName}
          />
        ))
      ) : (
      <p>no data</p>
      )}
    </ItemsContainer>
  );
}

export default TeamsList;
