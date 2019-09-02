import styled from 'styled-components';

const OutlineLink = styled.a`
  border: 3px solid ${({ theme }) => theme.colors.orange};
  width: 20rem;
  margin: auto;
  margin-top: 2rem;

  p {
    color: ${({ theme }) => theme.colors.light};
    text-transform: uppercase;
    margin: 0.7rem;
  }
`;

const LinkButton = props => {
  return (
    <OutlineLink href={props.href}>
      <p>{props.label}</p>
    </OutlineLink>
  )
};

export default LinkButton;
