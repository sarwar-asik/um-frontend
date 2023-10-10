"use client";

import { Input, Select } from "antd";
import React from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";



export type selectOptions ={
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
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue,
  handleChange
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
            // onChange={onChange}
            onChange={handleChange ? handleChange : onChange}
            options={options}
            value={value}
            size={size}
            style={{width:"100%"}}
        placeholder={placeholder}

            defaultValue={defaultValue}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
