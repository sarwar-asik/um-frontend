import React from "react";
import { Space, Spin } from "antd";

const Loading = () => {
  return (
    <Space size="large">
      <Spin size="default" />
      <h2>Loading.....</h2>
    </Space>
  );
};

export default Loading;
