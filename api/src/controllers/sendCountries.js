const { Country } = require('../db');

const sendCountries = async (countriesArray) => {
    const idsArray = await Promise.all(
        countriesArray.map(async (country) => {
            const [createdCountry, created] = await Country.findOrCreate({
                where: { id: country.id },
                defaults: {
                    name: country.name,
                    flag: country.flag.png,
                    continent: country.continent,
                    capital: country.capital,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                },
            });

            return createdCountry.id;
        })
    )
    return idsArray;
}

module.exports = sendCountries;