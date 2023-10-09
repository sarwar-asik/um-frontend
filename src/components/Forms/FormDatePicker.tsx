"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface IDatePicker {
  name: string;
  value?: Dayjs;
  label?: string;
  size?: "large" | "small";
  onChange?: (valOne: Dayjs | null, valTwo: any) => void;
}

const FormDatePicker = ({
  name,
  label,
  value,
  onChange,
  size,
}: IDatePicker) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
    console.log(date, dateString);
  };

  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            defaultValue={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
           style={{ width:"100%"}}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
