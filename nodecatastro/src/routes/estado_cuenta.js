import { Router } from 'express';
const router = Router();

import { crearEstado_cuenta, getEstadoCuentaMensuraID, getEstado_cuenta, updateEstado_Cuenta } from '../controllers/estado_cuenta.controller';

// /api/usuarioa
router.post('/',crearEstado_cuenta);
router.get('/', getEstado_cuenta);
router.put('/:id', updateEstado_Cuenta);
router.get('/:mensura_id', getEstadoCuentaMensuraID);
// /api/usuario/usuarioaID




export default router;