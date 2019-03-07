import Link from 'next/link';
import styled from 'styled-components';

const Nav = ({ className }) => (
  <nav className={className}>
    <Link href="/">
      <a>home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact Us</a>
    </Link>
  </nav>
);

export default styled(Nav)`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
`;
