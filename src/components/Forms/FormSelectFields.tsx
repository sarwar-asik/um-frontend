"use client";

import { Input, Select } from "antd";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";



type selectOptions ={
    label:string;
    value:string
}
type SelectFieldsProps = {
  name: string;
  value?: string | string[] | undefined;
  size?: `large` | "small";
  placeholder?:string
  label?: string;
  options:selectOptions[],
  defaultValue?:selectOptions
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue
}: SelectFieldsProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field:{value,onChange} }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            
            defaultValue={defaultValue}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
