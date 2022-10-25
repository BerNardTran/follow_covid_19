import React, { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import { getCountries } from "./api";
import { useCountry } from "./hook";
const App = () => {
  // const [countries, setCountries] = useState([]);
  const {isSuccess, data} = useCountry();
  console.log(data);
  return (
    <>{isSuccess &&
      <CountrySelector countries={data.data}></CountrySelector>
    }</>
  );
};

export default App;
