import styled from 'styled-components';
import svgs from '../utitlies/svgs.js';

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

const Icon = props => {
  return(
    <Svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>{svgs[props.icon].title}</title>
      <path d={svgs[props.icon].path}/>
    </Svg>
  )
};

export default Icon;
