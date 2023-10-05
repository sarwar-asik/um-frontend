"use client";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import StepperForm from "@/components/stepperForm/stepperForm";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Info",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data, "data from handleStudentSubmit ");
    } catch (error) {
      console.error(
        "🚀 ~ file: page.tsx:34 ~ handleStudentSubmit ~ error:",
        error
      );
    }
  };

  return (
    <div>
      <h1>CreateStudentPage</h1>
      <StepperForm submitHandler={(value)=>handleStudentSubmit(value)} steps={steps}></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
