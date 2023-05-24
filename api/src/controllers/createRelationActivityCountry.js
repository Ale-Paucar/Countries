const { Country } = require('../db');

const createRelationActivityCountry = async (newActivity,ids) => {
    await newActivity.addCountry(ids)
}

module.exports = createRelationActivityCountry;