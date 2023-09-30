"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import SideBar from "@/components/ui/SideBar";
import Contents from "@/components/ui/Contents";
import { isLoggedIn } from "@/service/auth.service";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <p>Loading user ......</p>;
  }

  return (
    <Layout hasSider>
      <SideBar></SideBar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
