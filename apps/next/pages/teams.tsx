import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TeamsProps {}

const StyledTeams = styled.div`
  color: pink;
`;

export function Teams(props: TeamsProps) {
  return (
    <StyledTeams>
      <h1>Welcome to Teams!</h1>
    </StyledTeams>
  );
}

export default Teams;
