import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  border: 2px solid black;
  margin: 100px auto;
  height: 500px;
  width: 500px;
`;

export const VLine = styled.div`
  position: absolute;
  left: ${(props) => (500 / (props.max + 1)) * (props.i + 1)}px;
  top: 0px;
  border: 1px solid black;
  height: 498px;
  width: 0px;
`;

export const HLine = styled.div`
  position: absolute;
  left: 0px;
  top: ${(props) => (500 / (props.max + 1)) * (props.i + 1)}px;
  border: 1px solid black;
  height: 0px;
  width: 498px;
`;
