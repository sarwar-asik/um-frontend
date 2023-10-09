"use client";

import { Table } from "antd";
import React from "react";

const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const onPageSizeChange = (page: number, pageSize: number) => {
    console.log(page, "page", pageSize, "pageSIze");
  };
  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={{
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPageSizeChange,
      }}
    />
  );
};

export default UMTable;
