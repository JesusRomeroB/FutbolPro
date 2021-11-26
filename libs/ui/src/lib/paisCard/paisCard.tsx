import Link from 'next/link';
import { Pais } from '@futbol-pro/types';
import { CardContainer, Image, TextWrapper } from '../cardElements';



export function PaisCard(props: Pais) {
  const { name, code, flag } = props;
  return (
    <CardContainer key={code}>
      <div>
        <TextWrapper>
          <b>{code}</b> - {name} -{' '}
        </TextWrapper>
        <Link href={`/teams/${name}`}>
          <Image src={flag}></Image>
        </Link>
      </div>
    </CardContainer>
  );
}

export default PaisCard;
