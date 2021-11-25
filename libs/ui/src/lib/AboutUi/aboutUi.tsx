import styled from 'styled-components';
import { AboutUiProps } from '@futbol-pro/types';
import { AboutBox, AboutContainer, TextWrapper, Text, TextTitle } from './aboutElements';
const StyledUi = styled.div``;

export function AboutUi(props: AboutUiProps) {
  const { title, content } = props;
  return (
    <AboutContainer>
      <AboutBox>
        <TextWrapper>
          <TextTitle>{title}</TextTitle>
          <Text>{content}</Text>
        </TextWrapper>
      </AboutBox>
    </AboutContainer>
  );
}

export default AboutUi;
