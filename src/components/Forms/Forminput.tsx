"use client";

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
  const { control } = useFormContext();


  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
        type==="password"?
        <Input.Password
        type={type}
        size={size}
        placeholder={placeholder}
        {...field}
        value={value ? value : field.value}
      />:
      <Input
      type={type}
      size={size}
      placeholder={placeholder}
      {...field}
      value={value ? value : field.value}
    />
        )}
      />
    </>
  );
};

export default FormInput;
