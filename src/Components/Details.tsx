import { useLocation, useNavigate } from "react-router-dom";
import { DetailsContainer } from "./Style";
import Header from "./Header";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { country } = location.state || {};

  if (!country) {
    return <p>No country found</p>;
  }

  return (
    <>
      <Header />
      <DetailsContainer>
        <div onClick={() => navigate(-1)} className="back">
          Back
        </div>
        <div className="flex">
          <div>
            <img className="img" src={country.flags?.png} alt={country.name} />
          </div>
          <div className="pre_info">
            <div className="flex_2">
              <div className="info">
                <h1 className="name">{country.name}</h1>
                <p>Native Name: {country.nativeName}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>

              <div className="money">
                <p>Top Level Domain: {country.topLevelDomain?.join(", ")}</p>
                <p>Currencies: {country.currencies?.[0]?.name}</p>
                <p>
                  Languages:{" "}
                  {country.languages
                    ?.map((language: { name: string }) => language.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="borders">
              <h2>Border Countries:</h2>
              <div className="border">
                {country.borders?.map((border: string, index: number) => (
                  <p key={index}>{border}</p> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </DetailsContainer>
    </>
  );
}
