import React, { useEffect } from 'react';
import { Box, VLine, HLine } from './style';

const Table = ({ n = 0, m = 0, arrayX }) => {
  const [a, setA] = React.useState([]);
  const [b, setB] = React.useState([]);

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
    }
    setB(displayVline);
  }, [m]);

  console.log('b', b.length);
  return (
    <React.Fragment>
      <Box>
        {a.map((x) => x)}
        {b.map((x) => x)}
      </Box>
    </React.Fragment>
  );
};

export default Table;
