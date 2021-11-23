import styled from 'styled-components';
import { usePaises } from '../usePaises';
import { Pais } from '@futbol-pro/types';
import Link from 'next/Link';
/* eslint-disable-next-line */
export interface PaisProps {}

const StyledPais = styled.div`
  color: pink;
`;

export function Paises(props: PaisProps) {
  const paises: any[] = usePaises();

  return (
    <StyledPais>
      <h1>Welcome to Pais!</h1>
      {paises && paises.length > 0 ? (
        paises.map((pais: Pais) => (
          <li key={pais.code}>
            {pais.code} - {pais.name} -{' '}
            <Link href={`/teams/${pais.name}`}>
              <img src={pais.flag}></img>
            </Link>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </StyledPais>
  );
}

export default Paises;
