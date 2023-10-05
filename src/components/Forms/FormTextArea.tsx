"use client";

import { Input } from "antd";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";
interface IInput {
  row?: number;
  name: string;
  value?: string | string[] | undefined;
  size?: `large` | "small";
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormTextArea = ({
  name,
  row,
  placeholder,

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
          <Input.TextArea
            rows={row}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
