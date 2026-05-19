import { Router } from 'express';
import {
    getAppointments,
    getAppointmentById,
    createAppointment
} from '../controllers/appointmentController.js';

const router = Router();

router.route('/')
    .get(getAppointments)
    .post(createAppointment);

router.get('/:id', getAppointmentById);

export default router;