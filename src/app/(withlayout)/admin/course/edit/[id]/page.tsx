"use client";
import Form from "@/components/Forms/Form";
import FormMultiSelectField, { SelectOptions } from "@/components/Forms/FormMultiSelectField";
import FormInput from "@/components/Forms/Forminput";
import ActionBar from "@/components/ui/ActionBar";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { USER_ROLE } from "@/constants/role";
import { useCourseQuery, useCoursesQuery, useUpdateCourseMutation } from "@/redux/api/courseApi";

import { Button, Col, Row, message } from "antd";
import React from "react";
import { SubmitHandler } from "react-hook-form";

type IdProps = {
  params: any;
};

const EditCoursePage = ({ params }: IdProps) => {
    const { data:CoursesData, isLoading:courseLoading } = useCoursesQuery({ limit: 10, page: 1 });

    const courses = CoursesData?.courses;
    const coursesOptions = courses?.map((course:any) => {
      return {
        label: course?.title,
        value: course?.id,
      };
    });

  const { id } = params;

  const { data, isLoading } = useCourseQuery(id);
  const [updateCourse] = useUpdateCourseMutation()
  //   console.log(data);

  const onSubmit: SubmitHandler<any> = async (values: { title: string }) => {
    message.loading("updating.....");
    try {
      console.log(values);
      await updateCourse({ id, body: values });

      message.success("successfully updated");
    } catch (error: any) {
      //   console.error(error, "for update course...");

      message.error(error?.message);
    }
  };
  const defaultValues: any = {
    title: data?.title || "",
    code: data?.code || "",
    credits: data?.credits || "",

  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: USER_ROLE.ADMIN,
            link: `/${USER_ROLE.ADMIN}`,
          },
          {
            label: "course",
            link: `/${USER_ROLE.ADMIN}/course`,
          },
        ]}
      />

      <ActionBar title="Update course " />

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="title" label="Title" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="code" label="Course Code" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormInput name="credits" label="Course Credits" />
            </div>
            {/* <div style={{ margin: "10px 0px" }}>
              <FormMultiSelectField
                options={coursesOptions as SelectOptions[]}
                name="coursePreRequisites"
                label="Pre Requisite Courses"
              />
            </div> */}
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditCoursePage;
