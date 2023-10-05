import StepperForm from "@/components/stepperForm/stepperForm";
import React from "react";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: "Student Information-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  return (
    <div>
      <h1>CreateStudentPage</h1>
      <StepperForm steps={steps}></StepperForm>
    </div>
  );
};

export default CreateStudentPage;
