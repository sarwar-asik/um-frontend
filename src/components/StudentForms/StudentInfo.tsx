"use client";
import React from "react";

import FormSelectField from "../Forms/FormSelectFields";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/constants/global";
import { Button, Col, Form, Row } from "antd";
import UploadImage from "../ui/UploadImage";
import FormInput from "../Forms/Forminput";

type FormValues = {
  id: string;
  password: string;
};

const StudentInfo = () => {
  return (
    <div>
      <h2>Student Info</h2>

      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          margin: "15px",
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormInput
              type="text"
              name="student.name.firstName"
              size="large"
              label="FirstName"
            />
          </Col>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormInput
              type="text"
              name="student.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormInput
              type="text"
              name="student.name.lastName"
              size="large"
              label="Last Name"
            />
          </Col>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
          {/*// ! select dynamic */}

          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormSelectField
              name="student.academicDepartment"
              size="large"
              label="Academic Department"
              options={acDepartmentOptions}
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormSelectField
              name="student.academicFaculty"
              size="large"
              label="Academic Faculty"
              options={facultyOptions}
              placeholder="Select"
            />
          </Col>
          <Col
            className="gutter-row"
            style={{
              marginBottom: "10px",
            }}
            span={6}
          >
            <FormSelectField
              name="student.academicSemester"
              size="large"
              label="Academic Semester"
              options={acSemesterOptions}
              placeholder="Select"
            />
          </Col>

        
        
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={6}
            >
              <FormSelectField
                name="student.gender"
                size="large"
                label="Gender"
                options={genderOptions}
                placeholder="Select"
              />
            </Col>
            <Col
              className="gutter-row"
              style={{
                marginBottom: "10px",
              }}
              span={6}
            >
              <UploadImage />
            </Col>
          
          
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
