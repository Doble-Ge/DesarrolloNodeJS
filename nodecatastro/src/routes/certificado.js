import { Router } from 'express';
const router = Router();

import { crearCertificado, getCertificado, getCertificadoMensuraID, updateCertificado } from '../controllers/certificado.controller';

// /api/usuarioa
router.post('/',crearCertificado );
router.get('/', getCertificado);
router.put('/:id',updateCertificado);
router.get('/:mensura_id', getCertificadoMensuraID)
// /api/usuario/usuarioaID




export default router;