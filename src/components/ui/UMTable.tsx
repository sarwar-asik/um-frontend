"use client";

import { Button, Table } from "antd";
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
      //   sorter:true
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
     render:function(data:any){
        return <Button onClick={()=>console.log(data)}  type="primary" danger>X</Button>
     }
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
      name: "Tike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "4",
      name: "Fohn",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  //! for pagination
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, "page", pageSize, "pageSIze");
  };

  ///! table data config /

  const paginationConfig = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    onChange: onPaginationChange,
  };

  ///! on table change
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log("🚀order:", order, field);
  };

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
