import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { below } from '../utilities/breakpoint';

const Container = styled.div`
  padding: 5rem;
  background-color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  position: relative;
  display: block;
  overflow: hidden;
  width: 100vw;

  ${below.xsmall`
    padding: 5rem 1rem;
  `}
`;

const DetailContainer = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
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

  ${below.xsmall`
    max-width: 30rem;
  `}
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

  ${below.med`
    margin-bottom: 1rem;
  `};
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

const ContentSection = ({ children, color, subtitle, title }) => {
  return (
    <Container color={color}>
      <ContainerInner>
        <Title subtitle={subtitle}>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <DetailContainer>{children}</DetailContainer>
      </ContainerInner>
    </Container>
  );
};

ContentSection.propTypes = {
  children: PropTypes.element,
  color: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

ContentSection.defaultProps = {
  children: React.createElement('div'),
  color: '',
  subtitle: '',
  title: '',
};

export default ContentSection;
