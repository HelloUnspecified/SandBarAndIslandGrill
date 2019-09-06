import styled from 'styled-components';
import { above, below } from '../utitlies/breakpoint.js';

const Container = styled.div`
  padding: 5rem;
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  position: relative;
`;

const DetailContainer = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;

  ${below.med`
    flex-direction: column;
    text-align: center;
    max-width: 700px;
    align-items: center;

    img {
      margin: 1rem 0;
    }
  `};
`;

const ContainerInner = styled.div`
  margin: auto;
  max-width: 90rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  margin-top: 0;
  line-height: 1.2;
  font-family: 'Great Vibes', cursive;
  margin-bottom: ${props => (props.subtitle ? '0' : '3rem')};

  .normal {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2.8rem;
  }

  .highlight {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;
  top: -0.8rem;
`;

const ContentSection = props => {
  // console.log(props);
  return (
    <Container color={props.color}>
      <ContainerInner>
        <Title subtitle={props.subtitle}>{props.title}</Title>
        {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
        <DetailContainer>{props.children}</DetailContainer>
      </ContainerInner>
    </Container>
  );
};

export default ContentSection;
