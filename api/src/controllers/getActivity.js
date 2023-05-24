const { Activity, Country } = require('../db');

const getActivity = async () => {
    const activities = await Activity.findAll({
        include:{
            model: Country,
            attributes: ["id","name"],
            through: {
                attributes: []
            }
        }
    })
    return activities;
}

module.exports = getActivity;