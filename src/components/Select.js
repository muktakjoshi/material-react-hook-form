import React from "react";
import FormField from "./FormField";
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

const Select = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={SelectImpl} {...props} />
));

const SelectImpl = React.forwardRef(
  (
    {
      label,
      name = "",
      variant,
      size,
      value,
      onChange,
      onBlur,
      error,
      helperText,
      style,
      defaultItem,
      items,
      nameField = "name",
      valueField = "value",
      ...restProps
    },
    ref
  ) => {
    const inputId = name.replace(".", "-");

    let menuItems = [];
    if (items) {
      if (defaultItem) {
        menuItems = [defaultItem, ...items];
      } else {
        menuItems = [...items];
      }
    }

    return (
      <FormControl variant={variant} size={size} error={error} style={style}>
        <InputLabel id={`${inputId}-label`}>{label}</InputLabel>
        <MUISelect
          labelId={`${inputId}-label`}
          id={inputId}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          ref={ref}
        >
          {menuItems.map((item) => (
            <MenuItem key={item[valueField]} value={item[valueField]}>
              {item[nameField]}
            </MenuItem>
          ))}
        </MUISelect>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default Select;
