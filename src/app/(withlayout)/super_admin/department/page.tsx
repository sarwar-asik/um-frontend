"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
    const { role }= getUserInfo() as any;
  

    //   console.log("from ma nageStudent", user);
    
      return (
        <div>
          <UMBreadCrumb
            items={[
              {
                label: USER_ROLE.SUPER_ADMIN,
                link: `/${ USER_ROLE.SUPER_ADMIN}`,
              }
            ]}
          />
          <h1>Manage department Pages</h1>
          <Link href={`/${USER_ROLE.SUPER_ADMIN}/department/create`}>
          <Button type="primary">Create department</Button>
          </Link>

          <UMTable></UMTable>
          
        </div>
      );
};

export default DepartmentPage;