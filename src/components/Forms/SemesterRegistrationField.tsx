import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField, { selectOptions } from "./FormSelectFields";
import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";

type SemesterRegistrationFieldProps = {
  name: string;
  label?: string;
  onChange: (e: any) => void;
};

const SemesterRegistrationField = ({
  name,
  label,
  onChange,
}: SemesterRegistrationFieldProps) => {
  const { data, isLoading } = useSemesterRegistrationsQuery({
    limit: 100,
    page: 1,
  });
  const semesterRegistrations = data?.semesterRegistrations;
  const semesterRegistrationsOptions = semesterRegistrations?.map(
    (semester) => {
      return {
        label:
          semester?.academicSemester?.title +
          "-" +
          semester?.academicSemester?.year,
        value: semester?.id,
      };
    }
  );

  return (
    <FormSelectField
      name={name}
      label={label}
      options={semesterRegistrationsOptions as selectOptions[]}
      handleChange={(e) => onChange(e)}
    />
  );
};

export default SemesterRegistrationField;
