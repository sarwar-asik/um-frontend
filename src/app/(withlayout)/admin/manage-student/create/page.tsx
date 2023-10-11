"use client";
// import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";
import StepperForm from "@/components/stepperForm/stepperForm";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddStudentWithFormDataMutation } from "@/redux/api/studentApi";
import { message } from "antd";
import { useRouter } from "next/navigation";

const CreateStudentPage = () => {
  
  const [addStudentWithFormData] = useAddStudentWithFormDataMutation();
  const router =useRouter()
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
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

  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    console.log("🚀 ~ file: page.tsx:35 ~ handleStudentSubmit ~ obj:", obj)
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);
    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);


    // console.log("values:", values);
    // console.log("file:", file);
    // console.log("data:", data);

    // console.log("formData:", formData);

    message.loading("Creating...");
    try {
      console.log(formData, "ffffff");
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successfully!");
        router.push("/admin/manage-student")
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "admin";
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1 style={{ margin: "10px 0px" }}>Create Student</h1>
      <StepperForm
        persistKey="student-create-form"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
