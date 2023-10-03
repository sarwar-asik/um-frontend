"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";


const SuperAdminPage = () => {
    const { role }= getUserInfo() as any;
  

    //   console.log("from ma nageStudent", user);
    
      return (
        <div>
          <UMBreadCrumb
            items={[
              {
                label: `${role}`,
                link: `/${role}`,
              }
            ]}
          />

          <h1>This is Super Admin page</h1>
        
        </div>
      );   
      
      
};

export default SuperAdminPage;