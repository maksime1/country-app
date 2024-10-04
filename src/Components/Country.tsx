import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import { CountryContainer } from "./Style";
import Header from "./Header";

export default function Country() {
  const [searchText, setSearchText] = useState("");
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  const filteredCountries = data.filter(
    (country) =>
      country.name.toLowerCase().startsWith(searchText.toLowerCase()) &&
      (region === "" || country.region === region)
  );

  const handleClick = (country: any) => {
    navigate(`/country/${country.name}`, { state: { country } });
  };

  const handleRegionChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setRegion(e.target.value);
  };

  return (
    <>
    <Header/>
      <CountryContainer>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter a country name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select className="options" onChange={handleRegionChange}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="countries">
          {filteredCountries.map((country) => (
            <div key={country.name}>
              <div
                onClick={() => handleClick(country)}
                className="country_div_container"
              >
                <img src={country.flags.png} alt="" />
                <div className="info_container">
                  <h2>{country.name}</h2>
                  <div className="pre_info">
                    <p>
                      Population: <span>{country.population}</span>
                    </p>
                    <p>
                      Region: <span>{country.region}</span>
                    </p>
                    <p>
                      Capital: <span>{country.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CountryContainer>
    </>
  );
}
