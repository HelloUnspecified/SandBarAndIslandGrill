import styled from 'styled-components';
import Icon from './Icon';

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align || 'left'};
`;

const IconText = props => {
  return (
    <IconBlock align={props.align}>
      <Icon icon={props.icon} />
      {props.children}
    </IconBlock>
  );
};

export default IconText;
