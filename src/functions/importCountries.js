import axios from "axios";

let countriesImport = await axios({
  method: "GET",
  url: "https://restcountries.com/v3.1/all",
});

let countries = {};

countriesImport.data.forEach((c) => {
  let country = {
    name: c.name.common,
    countryCode: c.cca3,
    nativeNames: c.name.nativeName,
    region: c.region,
    subregion: c.subregion,
    capital: c.capital ? c.capital[0] : "none",
    currencies: c.currencies,
    topLevelDomains: c.tld,
    population: c.population,
    flag: c.flags.png,
    languages: c.languages,
    borders: c.borders ? c.borders : "none",
  };

  countries[c.cca3] = country;
});

export { countries };
