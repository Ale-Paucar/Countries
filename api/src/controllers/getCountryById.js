const getAPIInfo = require('./getAPIInfo');

const getCountryById = (countriesInfo, id) =>{
    const pais = countriesInfo.find(country => country.numericCode === id)

    if(pais){
        return getAPIInfo([pais]);
    }else{
        throw Error('No se encontró país');
    }
}

module.exports = getCountryById;