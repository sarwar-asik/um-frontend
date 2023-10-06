"use client";
import { getErrorMessageByPropertyName } from "@/utils/schema-validation";
import { Input } from "antd";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
interface IInput {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  size?: `large` | "small";
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size,
  id,
  placeholder,
  validation,
  value,
  label,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  console.log(errorMessage, "from FromInput validation");

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />

      <small style={{ color: "red" }}>{errorMessage}</small>
    </>
  );
};

export default FormInput;
