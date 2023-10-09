"use client";

import { Table } from "antd";
import React from "react";

type ITableProps = {
  loading?: boolean;
  columns?: any;
  dataSource?: any;
  pageSize?: number;
  totalPages?: number;

  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const UMTable = ({
  columns,
  dataSource,
  loading = false,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: ITableProps) => {
  //! for pagination
  //   const onPaginationChange = (page: number, pageSize: number) => {
  //     console.log(page, "page", pageSize, "pageSIze");
  //   };

  ///! table data config /
  const paginationConfig = showPagination
    ? {
        pageSize:pageSize,
        total:totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

    console.log(paginationConfig);

  ///! on table change
//   const onTableChange = (pagination: any, filter: any, sorter: any) => {
//     const { order, field } = sorter;
//     console.log("🚀order:", order, field);
//   };

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
