import styled from 'styled-components';
import { ContactUi} from '@futbol-pro/ui'
const StyledPage = styled.div`
  .page {
  }
`;

export function About() {
  const title = 'Contact';
  const email =
    'E-mail: futbolpro@gmail.com';
  const telefono = 'Teléfono: 3XX XX XX';
  const pbx = 'PBX: XXX-XXX-XXXX';
  return <ContactUi title={title} email={email} telefono={telefono} pbx={pbx} />;
}

export default About;