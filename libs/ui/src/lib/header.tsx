import styled from 'styled-components';
import {Navbar} from './Navbar/navbar';
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
    <StyledPage>
      <h1>This is a header</h1>
    </StyledPage>
  );
}

export default Header;
