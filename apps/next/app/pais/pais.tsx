import styled from 'styled-components';
import { usePaises } from '../usePaises';
import { Pais } from '@futbol-pro/types';
import { PaisCard, ItemsContainer } from '@futbol-pro/ui';
import Link from 'next/Link';
/* eslint-disable-next-line */
export interface PaisProps {}

const StyledPais = styled.div`
  color: black;
`;

export function Paises(props: PaisProps) {
  const paises: any[] = usePaises();

  return (
    <ItemsContainer>
      {paises && paises.length > 0 ? (
        paises.map((pais: Pais) => (
          <PaisCard
            key={pais.code}
            code={pais.code}
            name={pais.name}
            flag={pais.flag}
          />
        ))
      ) : (
        <p>no data</p>
      )}
    </ItemsContainer>
  );
}

export default Paises;
