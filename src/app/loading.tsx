import React from "react";
import { Row, Space, Spin } from "antd";

const Loading = () => {
  return (
    <Row justify="center" align='middle' style={{height:"100vh"}} >
      <Space  size="large">
      <Spin size="large" />
      <h2>Loading.....</h2>
    </Space>
    </Row>
  );
};

export default Loading;
