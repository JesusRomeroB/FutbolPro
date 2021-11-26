import Link from 'next/link';
import styled from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import  Paises  from '../app/pais/pais';

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
      <Ui title="Lista de paises" showTitle={true}/>
      <Paises/>
    </StyledPage>
  );
}

export default Index;
