import Link from 'next/link';
import { Team } from '@futbol-pro/types';
import { CardContainer, Image, TextWrapper } from '../cardElements';

export function TeamCard(props: Team) {
  const { name, id, logo, countryName } = props;
  return (
    <CardContainer key={id}>
      <div>
        <TextWrapper>
          <b>{id}</b> - {name} -{' '}
        </TextWrapper>
        <Link href={`/teams/${countryName}/players/${id}`}>
          <Image src={logo}></Image>
        </Link>
      </div>
    </CardContainer>
  );
}

export default TeamCard;
