import * as yup from "yup";



export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required("password is requires"),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("firstName is required "),
      middleName: yup.string().required("middleName is required "),
      lastName: yup.string().required("lastName is required "),
    }),
    email:yup.string().email().required("email is required"),
    designation:yup.string().required("designation is required"),
    dateOfBirth:yup.string().required("dateOfBirth is required"),
  }),
});
