import React, { useState } from "react";
import FormField from "./FormField";
import {
  FormControl,
  FormLabel,
  FormGroup as FormGroup,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";

const CheckboxGroup = React.forwardRef((props, ref) => (
  <FormField ref={ref} Component={CheckboxGroupImpl} {...props} />
));

const CheckboxGroupImpl = React.forwardRef(
  (
    {
      label,
      name = "",
      variant,
      size,
      value,
      onChange,
      error,
      helperText,
      items = [],
      nameField = "name",
      valueField = "value",
    },
    ref
  ) => {
    const [checkedItems, setCheckedItems] = useState({});

    React.useEffect(() => {
      let newState = {};
      if (value) {
        value.map((item) => (newState[item] = true));
        setCheckedItems(newState);
      }
    }, [value]);

    const handleClick = (e) => {
      let newState = { ...checkedItems };

      if (e.target.checked) {
        newState[e.target.value] = true;
      } else {
        delete newState[e.target.value];
      }
      setCheckedItems(newState);

      var items = Object.keys(newState);
      if (onChange) onChange(items.length == 0 ? null : items);
    };
    return (
      <FormControl variant={variant} size={size} error={error}>
        <FormLabel>{label}</FormLabel>
        <FormGroup row>
          {items.map((item) => (
            <FormControlLabel
              key={item[valueField]}
              value={item[valueField]}
              label={item[nameField]}
              control={
                <Checkbox
                  size={size}
                  name={name}
                  size={size}
                  value={item[valueField]}
                  onClick={handleClick}
                  checked={Boolean(checkedItems[item[valueField]])}
                />
              }
            />
          ))}
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default CheckboxGroup;
