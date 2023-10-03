"use client";
import Form from "@/components/Forms/Form";
import FormSelectField from "@/components/Forms/FormSelectFields";
import FormInput from "@/components/Forms/Forminput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { genderOptions } from "@/constants/global";
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
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "24px",
                marginBottom: "34px",
              }}
            >
              Admin Information{" "}
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" style={{
                marginBottom:"20px"
              }} span={8}>
                <FormInput
                  type="text"
                  name="admin.name.firstName"
                  size="large"
                  label="FirstName"
                />
              </Col>
              <Col className="gutter-row" style={{
                marginBottom:"20px"
              }} span={8}>
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col className="gutter-row" style={{
                marginBottom:"20px"
              }} span={8}>
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>
              <Col className="gutter-row" style={{
                marginBottom:"20px"
              }} span={8}>
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col className="gutter-row" style={{
                marginBottom:"20px"
              }} span={8}>
               <FormSelectField name="admin.gender"  size="large"
               label="Gender"
               options={genderOptions}
               />
              </Col>
            </Row>
          </div>
          {/* submit BUtton */}
          <Button htmlType="submit" type="primary" danger>Create</Button>
        </Form>
      </section>
    </div>
  );
};

export default CreateAdminPage;
