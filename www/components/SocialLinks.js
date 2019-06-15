import styled from 'styled-components';
import Icon from './Icon';

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  a:hover {
    svg {
      fill: ${({ theme }) => theme.colors.orange};
    }
  }
`;

const SocialLinks = props => {
  return(
    <SocialLinksContainer>
      <a href="https://www.facebook.com/sandbarandislandgrill/">
        <Icon icon="facebook" />
      </a>
      <a href="https://www.instagram.com/sandbarandislandgrill/">
        <Icon icon="instagram" />
      </a>
      <a href="https://www.yelp.com/biz/sand-bar-and-island-grill-twin-lakes">
        <Icon icon="tripAdvisor" />
      </a>
      <a href="https://www.tripadvisor.com/Restaurant_Review-g60341-d2224176-Reviews-Sand_Bar_and_Island_Grill-Twin_Lakes_Wisconsin.html">
        <Icon icon="yelp" />
      </a>
    </SocialLinksContainer>
  )
}

export default styled(SocialLinks)`
`;
