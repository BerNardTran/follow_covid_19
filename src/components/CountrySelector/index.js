import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
} from "@mui/material";
import React from "react";

const CountrySelector = (props) => {
  const { value, handleOnChange, countries } = props;
  return (
    <FormControl>
      <InputLabel htmlFor="" shrink>
        Quốc Gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((country) => {
          return (
            <option value={country.ISO2.toLowerCase()}>
              {country.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
};

export default CountrySelector;
