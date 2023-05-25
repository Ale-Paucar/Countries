const { Router } = require('express');
const createActivities = require('../controllers/createActivities');
const getActivity = require('../controllers/getActivity')
const sendCountries = require('../controllers/sendCountries');
const createRelationActivityCountry = require('../controllers/createRelationActivityCountry')


const activitiesRoutes = Router();


activitiesRoutes.post('/', async (req,res)=>{
    //se postean las actividades turisticas
    try {
        const {name, dificulty, duration, season, selectedCountries} = req.body;

        const selectedCountriesIds = await sendCountries(selectedCountries);
        
        const newActivity = await createActivities(name, dificulty, duration, season);

        await createRelationActivityCountry(newActivity,selectedCountriesIds);
        
        res.status(201).json(newActivity)
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
});

activitiesRoutes.get('/',async (req,res)=>{
    //se reciben las actividades turisticas
    try {
        const activities = await getActivity();
        res.status(201).json(activities)
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
})




module.exports = activitiesRoutes;