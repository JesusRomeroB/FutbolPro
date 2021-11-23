import styled from 'styled-components';
import Link from 'next/Link';

const StyledPage = styled.div`
  .page {
  }
`;

export function Nav() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </StyledPage>
  );
}

export default Nav;
