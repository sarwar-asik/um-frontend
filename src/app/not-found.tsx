import React from "react";
import { Row, Typography } from "antd";

const { Title } = Typography;

const NotFoundPage = () => {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh",color:"red" }}>
      <h2>404! Not Found the page !</h2>
    </Row>
  );
};

export default NotFoundPage;
