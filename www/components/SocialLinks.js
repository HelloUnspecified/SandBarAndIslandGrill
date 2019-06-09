import styled from 'styled-components';
import Icon from './Icon';

const SocialLinks = props => {
  return(
    <div>
      <Icon icon="facebook" />
      <Icon icon="instagram" />
      <Icon icon="tripAdvisor" />
      <Icon icon="yelp" />
    </div>
  )
}

export default styled(SocialLinks)`
`;
