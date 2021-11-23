import styled from 'styled-components';
import { usePaises } from '../usePaises';
import { Pais } from '@futbol-pro/types';
import Link from 'next/Link';

const APIKey = 'kE8eu5JQfIptrIHjoUk3OXdh2vkkGbku1ZdTjymuSEr63YNDyukaVxK1wkXW';
/* eslint-disable-next-line */
export interface PaisProps {}

const StyledPais = styled.div`
  color: pink;
`;

export function Paises(props: PaisProps) {
  const paises: any[] = usePaises(APIKey);

  return (
    <StyledPais>
      <h1>Welcome to Pais!</h1>
      {paises && paises.length > 0 ? (
        paises.map((pais: Pais) => (
          <li key={pais.id}>
            {pais.id} - {pais.name} -{' '}
            <Link href='/teams/${pais.id}'>
              <img src={pais.image_path}></img>
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
