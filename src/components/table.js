import React, { useEffect } from 'react';
import { Box, VLine, HLine, HighlightedBox } from './style';

const Table = React.forwardRef(({ n = 0, m = 0 }, ref) => {
  const [a, setA] = React.useState([]);
  const [b, setB] = React.useState([]);
  const [xbox, setXbox] = React.useState('');
  const [ybox, setYbox] = React.useState('');
  const [pxbox, setPxbox] = React.useState('');
  const [pybox, setPybox] = React.useState('');

  useEffect(() => {
    const displayHline = [];
    for (let i = 0; i < n; i++) {
      displayHline.push(<HLine key={i} i={i} max={n} />);
    }
    setA(displayHline);
  }, [n]);

  useEffect(() => {
    const displayVline = [];
    for (let i = 0; i < m; i++) {
      displayVline.push(<VLine key={i} i={i} max={m} />);
      console.log('----', i);
    }
    setB(displayVline);
  }, [m]);

  React.useImperativeHandle(ref, () => ({
    hideLineFunctionX: (Xrandom) => {
      console.log('diux', Xrandom);
      const displayHline = [];
      for (let i = 0; i < n; i++) {
        const num = b[i].props.i + 1;
        if (Xrandom.includes(num)) {
          displayHline.push(<HLine hide key={i} i={i} max={n} />);
        } else {
          displayHline.push(<HLine key={i} i={i} max={n} />);
        }
      }
      setA(displayHline);
    },
    hideLineFunctionY: (Yrandom) => {
      const displayVline = [];
      for (let i = 0; i < m; i++) {
        const num = b[i].props.i + 1;
        if (Yrandom.includes(num)) {
          displayVline.push(<VLine hide key={i} i={i} max={m} />);
        } else {
          displayVline.push(<VLine key={i} i={i} max={m} />);
        }
      }
      setB(displayVline);
    },
    moveRedBox: (x1, y1, py, px) => {
      setXbox(x1);
      setYbox(y1);
      setPybox(py);
      setPxbox(px);
    },
  }));

  return (
    <React.Fragment>
      <Box>
        <HighlightedBox
          x={xbox || 0}
          y={ybox || 0}
          py={pybox}
          px={pxbox}
          maxX={n}
          maxY={m}
        />
        {a.map((x) => x)}
        {b.map((x) => x)}
      </Box>
    </React.Fragment>
  );
});

export default Table;
