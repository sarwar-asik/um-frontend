"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { USER_ROLE } from "@/constants/role";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/deprtmentApi";
import { useDebounced } from "@/redux/hooks";
import {
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";

const DepartmentPage = () => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;
  // console.log(query);

  ///! debounced data for delay data  //

  const debouncedToken = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  // console.log(debouncedToken);
  if (!!debouncedToken) {
    // console.log("debouncedToken",!!debouncedToken);
    query["searchTerm"] = searchTerm;
  }

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const [deleteDepartment] = useDeleteDepartmentMutation();

  // console.log(data);
  // const { departments, meta } = data as any
  const departments = data?.departments;
  const meta = data?.meta;

  // console.log(departments);
  const deleteDepartmentHandler = async (id: string) => {
    console.log(id);
    message.loading("deleting department");
    try {
      await deleteDepartment(id);
      message.success("deleted successfully")
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: true,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D,YYYY hh:mm A");
      },
      // sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            {/* <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button> */}

            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{ margin: "5px" }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteDepartmentHandler(data?.id)}
              type="primary"
              danger
            >
              <UserDeleteOutlined />
            </Button>
          </>
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
    // console.log(page, "page", pageSize, "pageSIze");
    setPage(page);
    setSize(pageSize);
  };

  ///! on table change
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log("🚀order:", order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
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

      <ActionBar title="Manage department Pages">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: "20%" }}
          type="text"
          size="large"
          placeholder="Search.."
        />
        <div>
          <Link href={`/${USER_ROLE.SUPER_ADMIN}/department/create`}>
            <Button type="primary">Create department</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ marginLeft: "5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={false}
        columns={columns}
        dataSource={departments}
        showPagination={true}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
      />
    </div>
  );
};

export default DepartmentPage;
