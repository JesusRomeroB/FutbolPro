import styled from 'styled-components';
import { AboutUi } from '@futbol-pro/ui';
const StyledPage = styled.div`
  .page {
  }
`;

export function About() {
  const title = 'About';
  const content =
    'Somos el proveedor de información acerca de los equipos de fútbol número uno en el mundo. Con información acerca de cada equipo de cada país del mundo';
  return <AboutUi title={title} content={content} />;
}

export default About;
