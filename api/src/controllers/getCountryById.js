const getAPIInfo = require('./getAPIInfo');
const { Activity, Country } = require('../db');

const getCountryById = async (countriesInfo, id) =>{
    const pais = countriesInfo.find(country => country.numericCode === id)

    
    
    if(pais){
        return getAPIInfo([pais]);
    }else{
        throw Error('No se encontró país');
    }
}

module.exports = getCountryById;