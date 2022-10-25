import React, { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import HighLight from "./components/HighLight";
import Summary from "./components/Summary";
import { getCountries } from "./api";
const App = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountries().then((res) => setCountries(res.data));
  }, []);
  return (
    <div>
      <CountrySelector countries={countries} />
      <HighLight />
      <Summary />
    </div>
  );
};

export default App;
