"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useCreateDepartmentMutation } from "@/redux/api/deprtmentApi";
import { getUserInfo } from "@/service/auth.service";
import { Button } from "antd";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const CreateDepartmentPage = () => {
  const { role } = getUserInfo() as any;
  // console.log(role);
const [createDepartment] = useCreateDepartmentMutation()

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      console.log(data);
      const res = await createDepartment({...data})
      console.log(res,"ress");

    } catch (error) {
      console.error(error, "for create department...");
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />
      <h2>Create Department Page</h2>

      <Form submitHandler={onSubmit}>
        <FormInput type="text" name="title" size="large" label="Department" />

        <Button htmlType="submit" type="primary" danger>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateDepartmentPage;
