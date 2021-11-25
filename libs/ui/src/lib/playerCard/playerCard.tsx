import { Player } from '@futbol-pro/types';
import { CardContainer, Image, TextWrapper } from '../cardElements';

export function PlayerCard(props: Player) {
  const { name, id, photo } = props;
  return (
    <CardContainer key={id}>
      <div>
        <TextWrapper>
          <b>{id}</b> - {name}
        </TextWrapper>
          <Image src={photo}></Image>
      </div>
    </CardContainer>
  );
}

export default PlayerCard;
