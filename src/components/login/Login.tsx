"use client";

import React from "react";
import { Button, Col, Row, message } from "antd";
import loginBanner from "../../assets/login-image.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, isLoggedIn, storeUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";

type FormValues = {
  id: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {

      const res = await userLogin({ ...data }).unwrap();
      console.log("🚀 ~ file: page.tsx res:", res);
      storeUserInfo({ accessToken: res?.accessToken });
      if (res?.accessToken) {
        router.push("profile");
        message.success("Login Successfully");
      }
    } catch (error) {
      console.error(error, "for login submit...");
    }
  };
  return (
    <Row align="middle" justify="center" style={{}}>
      <Col sm={12} md={16} lg={10}>
        <Image src={loginBanner} width={500} alt="login-image" />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1 style={{ margin: "1em 0px" }}>First login your account</h1>
        <div className="">
          <Form submitHandler={onSubmit}>
            <div style={{ margin: "15px 0px" }}>
              <FormInput type="text" name="id" size="large" label="User Id" />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="User Password"
              />
            </div>

            <Button danger type="default" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
