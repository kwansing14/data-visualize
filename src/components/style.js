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
  display: ${(props) => (props.hide ? 'none' : '')};
  left: ${(props) => (500 / (props.max + 1)) * (props.i + 1)}px;
  top: 0px;
  border: 1px solid black;
  height: 498px;
  width: 0px;
`;

export const HLine = styled.div`
  position: absolute;
  left: 0px;
  display: ${(props) => (props.hide ? 'none' : '')};
  top: ${(props) => (500 / (props.max + 1)) * (props.i + 1)}px;
  border: 1px solid black;
  height: 0px;
  width: 498px;
`;

export const HighlightedBox = styled.div`
  position: absolute;
  z-index: 1;
  left: ${(props) => props.px * (500 / (props.maxY + 1)) - 2}px;
  top: ${(props) => props.py * (500 / (props.maxX + 1)) - 2}px;
  height: ${(props) => props.x * (500 / (props.maxX + 1)) + 4}px;
  width: ${(props) => props.y * (500 / (props.maxY + 1)) + 4}px;
  border: 4px solid red;
`;
