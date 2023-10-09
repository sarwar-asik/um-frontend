"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  const { role } = getUserInfo() as any;
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
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            X
          </Button>
        );
      },
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

  // ///! table data config /

  // const paginationConfig = {
  //   pageSize: 5,
  //   total: 10,
  //   pageSizeOptions: [5, 10, 20],
  //   showSizeChanger: true,
  //   onChange: onPaginationChange,
  // };

  ///! on table change
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log("🚀order:", order, field);
  };

  //   console.log("from ma nageStudent", user);

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: USER_ROLE.SUPER_ADMIN,
            link: `/${USER_ROLE.SUPER_ADMIN}`,
          },
        ]}
      />
      <h1>Manage department Pages</h1>
      <Link href={`/${USER_ROLE.SUPER_ADMIN}/department/create`}>
        <Button type="primary">Create department</Button>
      </Link>

      <UMTable
        loading={false}
        columns={columns}
        dataSource={tableData}
        pageSize={5}
        totalPages={10}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default DepartmentPage;
