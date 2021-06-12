import React from "react";
import { Controller, useFormState } from "react-hook-form";

function FormField({
  name,
  label,
  Component,
  rules,
  variant = "outlined",
  size = "small",
  ...restProps
}) {
  const formState = useFormState();
  return (
    <Controller
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Component
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          error={Boolean(formState.errors && formState.errors[name])}
          helperText={formState.errors && formState.errors[name]?.message}
          label={label}
          variant={variant}
          size={size}
          {...restProps}
        />
      )}
      rules={rules}
    />
  );
}

export default FormField;
