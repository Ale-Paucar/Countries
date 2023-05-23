const { Router } = require('express');
const createActivities = require('../controllers/createActivities');

const activitiesRoutes = Router();


activitiesRoutes.post('/', async (req,res)=>{
    //se postean las actividades turisticas
    try {
        const {name, dificulty, duration, season} = req.body;
        
        const newActivity = await createActivities(name, dificulty, duration, season)
        res.status(201).json(newActivity)
    } catch (err) {
        res.status(400).json( {err: err.message} )
    }
});

activitiesRoutes.get('/',(req,res)=>{
    //se reciben las actividades turisticas
})




module.exports = activitiesRoutes;