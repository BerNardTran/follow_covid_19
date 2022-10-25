import React, { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import { getCountries } from "./api";
import { useCountry } from "./hook";
const App = () => {
  const [countries, setCountries] = useState([]);
  const { isSuccess, data } = useCountry();
  useEffect(() => {
    if (isSuccess) {
      setCountries(data.data);
    }
  }, [isSuccess]);
  return (
    <>
      <CountrySelector countries={countries}></CountrySelector>
    </>
  );
};

export default App;
