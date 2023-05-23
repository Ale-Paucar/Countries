const getAPIInfo = require('./getAPIInfo')

const getCountryByName = (apiJSON, name) => {
    const paises = apiJSON.filter( country => country.name.toLowerCase().includes(name.toLowerCase()));
    if(paises.length){
        return getAPIInfo(paises)
    }else{
        throw Error('No se encontró país');
    }  
}

module.exports = getCountryByName