import styled from 'styled-components';
import {above, below} from '../utitlies/breakpoint.js';

const Container = styled.div`
  width: 100vw;
  padding: 40px 40px;
`;

const DetailContainer = styled.div`
  margin: auto;
  display: flex;
  ${below.med`
    flex-direction: column;
  `};
`;

const ImageContainer = styled.div`
  order: ${({ align }) => align === 'left' ? 0 : 2};
  padding-left: ${({ align }) => align === 'left' ? 0 : '30px'};
  padding-right: ${({ align }) => align === 'left' ? '30px' : 0};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturedImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 200px;

  ${below.med`
    width: 70%;
    height: auto;
  `};
`;

const Title = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-top: 0;
  line-height: 1.2;
`;

const Description = styled.p`
  margin: 0;
`;

const ContentSection = props => {
  return(
    <Container>
      <DetailContainer>
        <ImageContainer align={ props.align }>
          <FeaturedImage src={props.image}/>
        </ImageContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </TextContainer>
      </DetailContainer>
    </Container>
  )
};

export default ContentSection;
