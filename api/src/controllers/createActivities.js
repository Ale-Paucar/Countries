const { Activity } = require('../db');

const createActivities = async (name, dificulty, duration, season) => await Activity.create({name, dificulty, duration, season})

module.exports = createActivities;