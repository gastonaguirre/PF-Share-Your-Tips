const { Router } = require('express');

const router = Router();


// muestra todos los pokemones o los busca por nombre

router.get('/', async (_req: any, res: any) => {



             res.status(200).json("user")

})

export = router