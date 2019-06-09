import styled from 'styled-components';

const FeaturedImage = styled.img`
  width: 100px;
`;

const Title = styled.p`
`;

const Description = styled.p`
`;

const ContentSection = props => {
  return(
    <div>
      <FeaturedImage src={props.image} />
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </div>
  )
};

export default styled(ContentSection)`
  display: grid;
  grid-template-columns: 1fr auto 10px minmax(320px, 1024px) 10px auto 1fr;

  > * {
    grid-column: 4 / -4;
  }
`;
