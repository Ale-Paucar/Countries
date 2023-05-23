const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const activitiesRoutes = require('./activitiesRoutes');
const countriesRoutes = require('./countriesRoutes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countriesRoutes);

router.use('/activities', activitiesRoutes)

module.exports = router;
