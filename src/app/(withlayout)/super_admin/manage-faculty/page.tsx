"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFaultyPage = () => {
  const { role } = getUserInfo() as any;

  //   console.log("from ma nageStudent", user);

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Manage faculty Pages</h1>
      <Link href={`/${USER_ROLE.SUPER_ADMIN}/manage-faculty/create`}>
        <Button type="primary">Create faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFaultyPage;
