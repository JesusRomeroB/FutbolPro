import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Ui } from '@futbol-pro/ui';
import Link from 'next/link';
import  TeamsList  from '../../../app/team/team';
import { useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface TeamsProps {}

const StyledTeams = styled.div`
`;

export function Teams(props: TeamsProps) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <StyledTeams>
      <Ui title="Lista de equipos" showTitle={true} />
      {name?
      <TeamsList countryName={name.toString()}/>
      :
      <p>Loading</p>
      }
    </StyledTeams>
  );
}

export default Teams;
