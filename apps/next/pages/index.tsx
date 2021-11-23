import Link from 'next/Link';
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
      <Ui title="Buenas chavales esto es una prueba" showTitle={true}/>
      <Link href="/about">About</Link>
      <Paises/>
    </StyledPage>
  );
}

export default Index;
