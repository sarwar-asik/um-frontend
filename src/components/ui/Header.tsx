import React from "react";

import { Layout, MenuProps, Button, Dropdown, Row, Space, Avatar } from "antd";

const { Header: AntHeader } = Layout;
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/service/auth.service";
import { authKey } from "@/constants/storagekey";
import { useRouter } from "next/navigation";



const Header = () => {
    const router = useRouter()

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login")
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button onClick={logout} type="primary" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <AntHeader style={{ background: "white" }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown
          menu={{ items }}
          // placement="bottom"
          // arrow={{ pointAtCenter: true }}
        >
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
