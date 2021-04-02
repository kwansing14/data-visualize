import React, { useEffect } from 'react';
import Table from './table';
import { Button, Input, Divider, Row, Col } from 'antd';

const MainPage = () => {
  const [n, setN] = React.useState(10);
  const [m, setM] = React.useState(10);
  const [randomX, setRandomX] = React.useState([]);
  const [randomY, setRandomY] = React.useState([]);
  const [widthX, setWidthX] = React.useState([]);
  const [widthY, setWidthY] = React.useState([]);
  const [area, setArea] = React.useState('');

  const fillArrayWithRandomNumber = (limit) => {
    let initialNumber = 0;
    let array = [];
    do {
      initialNumber = Math.floor(Math.random() * 2) + 1 + initialNumber;
      array.push(initialNumber);
    } while (initialNumber < limit);
    array.pop(); // pop the last useless number
    return array;
  };

  const sequenceCheck = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1] - 1) {
      } else {
        newArray.push(array[i]);
      }
    }
    return newArray;
  };

  const findWidth = (array, array2) => {
    let newArray = [];
    if (array2[0] === 1) {
      newArray.push(array[0] + 1);
    } else {
      newArray.push(array[0]);
    }
    for (let i = 1; i < array.length; i++) {
      newArray.push(array[i] - array[i - 1]);
    }
    return newArray;
  };

  const findPosition = (x, ranArray, widArray) => {
    let width = 0;
    if (ranArray[0] !== 1) {
      width = 1;
    }
    for (let i = 0; i < x; i++) {
      // check array
      width += widArray[i];
    }
    return width;
  };

  const childRef = React.useRef();

  const clickHandler = () => {
    const x = fillArrayWithRandomNumber(n);
    const y = fillArrayWithRandomNumber(m);
    setRandomX(x);
    setRandomY(y);
    childRef.current.hideLineFunctionX(x);
    childRef.current.hideLineFunctionY(y);
  };

  // sequence check and find width
  useEffect(() => {
    const v1 = sequenceCheck(randomX);
    console.log('v1', v1);
    const v2 = findWidth(v1, randomX);
    setWidthX(v2);
  }, [randomX]);

  useEffect(() => {
    const v1 = sequenceCheck(randomY);
    const v2 = findWidth(v1, randomY);
    setWidthY(v2);
  }, [randomY]);

  useEffect(() => {
    const ans = Math.max(...widthX) * Math.max(...widthY);
    setArea(ans);
  }, [widthX, widthY]);

  useEffect(() => {
    if (!isNaN(area)) {
      console.log('ok');
      const v1 = widthX.indexOf(Math.max(...widthX));
      const v2 = widthY.indexOf(Math.max(...widthY));
      console.log('vv1', v1);
      console.log('vv2', v2);
      // if index is at 1, need add 0 to the position
      const positionY = findPosition(v1, randomX, widthX);
      const positionX = findPosition(v2, randomY, widthY);

      console.log('----', positionY);
      const maxX = Math.max(...widthX);
      const maxY = Math.max(...widthY);
      console.log('vv1', maxX, maxY);
      childRef.current.moveRedBox(maxX, maxY, positionY, positionX);
    }
  });

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={6} offset={2}>
          <Table
            n={parseInt(n)}
            m={parseInt(m)}
            x={randomX}
            y={randomY}
            ref={childRef}
          />
        </Col>
        <Col span={6} offset={8}>
          <Divider orientation="left">X-axis</Divider>
          <Input
            value={n}
            maxLength={2}
            onChange={(e) => {
              setN(e.target.value);
            }}
          />
          <Row justify="center">
            <Divider orientation="left">Y-axis</Divider>
            <Input
              value={m}
              maxLength={2}
              onChange={(e) => {
                setM(e.target.value);
              }}
            />
          </Row>
          <Row justify="center">
            <Divider orientation="left">Actions</Divider>
            <Button onClick={clickHandler} type="primary">
              Change
            </Button>
          </Row>
          <Row justify="left">
            <div>X that disappear:{randomX.toString()}</div>
            <div>Y that disappear:{randomY.toString()}</div>
            <div>X width at each column:{widthX.toString()}</div>
            <div>Y width at each column:{widthY.toString()}</div>
            {!isNaN(area) && <div>Biggest Area is: {area}</div>}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default MainPage;
