import styled from 'styled-components';
import Icon from './Icon';

const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align || 'left'};
`;

const IconText = ({ align, icon, children, className }) => {
  // console.log(props);

  return (
    <IconBlock align={align} className={className}>
      <Icon icon={icon} />
      {children}
    </IconBlock>
  );
};

export default IconText;
