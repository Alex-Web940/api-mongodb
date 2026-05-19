import { Router } from 'express';
import { getPets, getPetById, createPet, updatePet, deletePet } from '../controllers/petController.js';

const router = Router();
router.route('/').get(getPets).post(createPet);
router.route('/:id').get(getPetById).put(updatePet).delete(deletePet);

export default router;