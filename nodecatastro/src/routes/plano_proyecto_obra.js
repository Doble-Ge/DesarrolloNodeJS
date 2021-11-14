import { Router } from 'express';
const router = Router();

import { crearPlano_proyecto_obra, getPlanoProyectoMensuraID, getPlano_proyecto_obra, updatePlano_Proyecto_Obra } from '../controllers/plano_proyecto_obra.controller';

// /api/usuarioa
router.post('/', crearPlano_proyecto_obra);
router.get('/', getPlano_proyecto_obra);
router.put('/:id',updatePlano_Proyecto_Obra);
router.get(':mensura_id', getPlanoProyectoMensuraID);
// /api/usuario/usuarioaID




export default router;