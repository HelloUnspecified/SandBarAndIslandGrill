import styled from 'styled-components';
import Icon from './Icon';

const IconBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const IconText = props => {
  return(
    <IconBlock>
      <Icon icon={props.icon} />
      {props.children}
    </IconBlock>
  )
};

export default IconText;
