const getAPIInfo = (countryInfo) => {

    return countryInfo.map(country => {
        return {
            id: country.numericCode,
            name: country.name,
            flag: country.flags,
            continent: country.region,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population, 
        }
    })
}

module.exports = getAPIInfo;