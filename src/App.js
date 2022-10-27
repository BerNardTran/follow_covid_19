import React, { useEffect, useState } from "react";
import { getCountrySelected } from "./api";

import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import { useCountry } from "./hook";
const App = () => {
  const [countries, setCountries] = useState([]);
  const { isSuccess, data } = useCountry();
  const [countrySelectedId, setCountrySelectedId] = useState("");
  const [report, setReport] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      setCountries(data.data);
      setCountrySelectedId('vn');
    }
  }, [isSuccess]);

  const handleOnChange = (e) => {
    setCountrySelectedId(e.target.value);
  };

  useEffect(() => {
    if (countrySelectedId) {
      const {Slug} = countries.find(
        (country) => country.ISO2.toLowerCase() === countrySelectedId
      );
      getCountrySelected(Slug).then((res) => {
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, countrySelectedId]);
  return (
    <>
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={countrySelectedId}
      ></CountrySelector>
      <HighLight report={report} />
      <Summary report={report} />
    </>
  );
};

export default App;
