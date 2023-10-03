"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/service/auth.service";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};

const CreateAdminPage = () => {
  const router = useRouter();
  // console.log(getUserInfo());
  // console.log(isLoggedIn());

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error, "for login submit...");
    }
  };

  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `admin`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Create Admin</h1>

      <section>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FirstName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FirstName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="name"
                size="large"
                label="FirstName"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="Password"
              />
            </Col>
          </Row>
        </Form>
      </section>
    </div>
  );
};

export default CreateAdminPage;
