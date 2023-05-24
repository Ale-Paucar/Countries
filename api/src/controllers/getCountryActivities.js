const { Activity, Country } = require('../db');

const getCountryActivities  = async (id) =>{
    
    const countriesBDD =  await Country.findByPk(id,{
        include: {
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })
    
    if(countriesBDD){
        return countriesBDD;
    }else{
        return {activities: "No se encontró actividad"};
    }
}

module.exports = getCountryActivities;