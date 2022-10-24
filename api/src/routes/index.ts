const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fav = require('./fav.ts')
const user = require('./user.ts')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/fav', fav)
router.use('/user', user)

export = router;