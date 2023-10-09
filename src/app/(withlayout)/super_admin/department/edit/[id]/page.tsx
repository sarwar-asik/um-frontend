"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/Forminput";
import ActionBar from "@/components/ui/ActionBar";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { USER_ROLE } from "@/constants/role";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/deprtmentApi";
import { Button, message } from "antd";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type IdProps = {
  params: any;
};

const EditDepartmentPage = ({ params }: IdProps) => {
  //   console.log(
  //     "🚀 ~ file: page.tsx:8 ~ EditDepartmentPage ~ params:",
  //     params?.id
  //   );
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();
  //   console.log(data);

  const onSubmit: SubmitHandler<any> = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      console.log(values);
      await updateDepartment({ id, body: values });

      message.success("successfully updated");
    } catch (error: any) {
      //   console.error(error, "for update department...");

      message.error(error?.message);
    }
  };
  const defaultValues: any = {
    title: data?.title || "",
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: USER_ROLE.SUPER_ADMIN,
            link: `/${USER_ROLE.SUPER_ADMIN}`,
          },
          {
            label: "department",
            link: `/${USER_ROLE.SUPER_ADMIN}/department`,
          },
        ]}
      />

      <ActionBar title="Update department " />

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <FormInput type="text" name="title" size="large" label="Department" />

        <Button htmlType="submit" type="primary" danger>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
