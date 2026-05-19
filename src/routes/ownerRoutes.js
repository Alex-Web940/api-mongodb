import { Router } from 'express';
import { getOwners, getOwnerById, createOwner, updateOwner, deleteOwner } from '../controllers/ownerController.js';

const router = Router();
router.route('/').get(getOwners).post(createOwner);
router.route('/:id').get(getOwnerById).put(updateOwner).delete(deleteOwner);

export default router;