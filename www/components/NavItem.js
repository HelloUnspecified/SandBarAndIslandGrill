import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 11px;
  text-align: center;
  color: white;

  &:hover {
    color: orange;
  }
`;

const NavImage = styled.img`
  width: 70px;
`;

const NavItem = props => {
  const displayedLink = () => {
    if(props.image) {
      return (
        <NavImage src={props.image} />
      )
    }
    else {
      return props.title;
    }
  }

  return(
    <Link href={props.href} passHref>
      <StyledLink>{displayedLink()}</StyledLink>
    </Link>
  )
};

export default NavItem;
