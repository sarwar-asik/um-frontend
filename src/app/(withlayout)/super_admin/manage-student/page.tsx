"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import React from "react";

const ManageStudentPage = () => {
  const { role }= getUserInfo() as any;
  

//   console.log("from manageStudent", user);

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `student`,
            link: `/${role}/student`,
          },
        ]}
      />
      <h1>Manage Student Pages</h1>
    </div>
  );
};

export default ManageStudentPage;
