import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SideBar from "@/components/ui/SideBar";
import Contents from "@/components/ui/Contents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar></SideBar>
     <Contents>
     {children}
     </Contents>
    </Layout>
  );
};

export default DashboardLayout;
