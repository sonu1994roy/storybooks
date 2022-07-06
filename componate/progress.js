import styled from 'styled-components';

const Progress = styled.div`
position: fixed;
top: 0;
  background:  linear-gradient(
    to right,
    rgba(4, 8, 219, 0.8) ${props => props.scroll},
    transparent  0);
  width:  100%;
  height:  4px;
  z-index:  3;
`;

export default Progress;

