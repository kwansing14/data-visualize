import React from 'react';
import Table from './table';
import { Button, Input, Divider, Row, Col } from 'antd';

const MainPage = () => {
  const [n, setN] = React.useState(10);
  const [m, setM] = React.useState(10);

  // const n = 5;
  // const m = 5;

  // const fillArrayWithRandomNumber = (limit) => {
  //   let initialNumber = 0;
  //   let array = [];
  //   do {
  //     initialNumber = Math.floor(Math.random() * 2) + 1 + initialNumber;
  //     array.push(initialNumber);
  //   } while (initialNumber < limit);
  //   array.pop(); // pop the last useless number
  //   return array;
  // };

  // const randomX = fillArrayWithRandomNumber(n);
  // const randomY = fillArrayWithRandomNumber(m);

  const arrayX = [1, 2, 3];
  return (
    <React.Fragment>
      <Row justify="center">
        <Col span={6}>
          <Divider orientation="left">X-axis</Divider>
          <Input value={n} onChange={(e) => setN(e.target.value)} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Divider orientation="left">Y-axis</Divider>
          <Input value={m} onChange={(e) => setM(e.target.value)} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Divider orientation="left">Actions</Divider>
          <Button type="primary">Button</Button>
        </Col>
      </Row>
      <Table n={parseInt(n)} m={parseInt(m)} arrayX={arrayX} />
    </React.Fragment>
  );
};
export default MainPage;
