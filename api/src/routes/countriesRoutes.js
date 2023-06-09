const { Router } = require('express');
const axios = require('axios');
//
const getAPIInfo = require('../controllers/getAPIInfo');
const getCountryByName = require('../controllers/getCountryByName');
const getCountryById = require('../controllers/getCountryById');
//
const getCountryActivities = require('../controllers/getCountryActivities');


const countriesRoutes = Router();

countriesRoutes.get('/', async (req,res)=>{
    try {
        const response = await axios.get('https://rest-countries.up.railway.app/v2/all');

        const paises = await getAPIInfo(response.data);
        
        res.status(200).json(paises)
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
});


countriesRoutes.get('/name', async (req,res)=>{
    try {
        const { name } = req.query;
        const response = await axios.get('https://rest-countries.up.railway.app/v2/all');
        const paises = await getCountryByName(response.data,name);
        
        
        res.status(200).json(paises)
        
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
});

countriesRoutes.get('/:idPais', async (req,res)=>{
    try {
        const idPais = req.params.idPais;
        
        const response = await axios.get('https://rest-countries.up.railway.app/v2/all');

        const pais = await getCountryById(response.data,idPais);

        const activitiesCountry = await getCountryActivities(idPais)

        pais[0]["activities"] = activitiesCountry.activities;
        
        res.status(200).json(pais);
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
});

module.exports = countriesRoutes;