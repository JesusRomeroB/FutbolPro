import styled from 'styled-components';
import { ContactUiProps } from '@futbol-pro/types';
import { ContactBox, ContactContainer, TextWrapper, Text, TextTitle } from './contactElements';
const StyledUi = styled.div``;

export function ContactUi (props: ContactUiProps) {
  const { title, email, telefono, pbx } = props;
  return (
    <ContactContainer>
      <ContactBox>
        <TextWrapper>
          <TextTitle>{title}</TextTitle>
          <Text>{email}</Text>
          <Text>{telefono}</Text>
          <Text>{pbx}</Text>
        </TextWrapper>
      </ContactBox>
    </ContactContainer>
  );
}

export default ContactUi;