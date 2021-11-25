import Link from 'next/Link';
import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import  Paises  from '../app/pais/pais';
import { Nav } from '@futbol-pro/ui';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Ui title="Pais" showTitle={true}/>
      <Paises/>
    </StyledPage>
  );
}

export default Index;
