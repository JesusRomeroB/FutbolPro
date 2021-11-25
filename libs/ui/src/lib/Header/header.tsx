import styled from 'styled-components';
import { HeaderSection, HeaderText, HeaderImage } from './headerElements';
import { Parallax } from 'react-scroll-parallax';
const StyledPage = styled.div`
  .page {
  }
`;

export function Header() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <HeaderSection>
      <Parallax y={[-70, 40]} tagOuter="figure">
        <HeaderImage>
          <HeaderText>
            <h1>FutbolPro</h1>
            <h2>Todo lo que necesitas saber de fútbol en un sólo lugar</h2>
          </HeaderText>
        </HeaderImage>
      </Parallax>
    </HeaderSection>
  );
}

export default Header;
