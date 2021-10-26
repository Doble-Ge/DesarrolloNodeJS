import { Router } from 'express';
const router = Router();

import { crearCopia_escritura, getCopia_escritura } from '../controllers/copia_escritura.controller';

// /api/usuarioa
router.post('/',crearCopia_escritura);
router.get('/', getCopia_escritura);

// /api/usuario/usuarioaID




export default router;