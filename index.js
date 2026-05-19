import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/confing/db.js';
import ownerRoutes from './src/routes/ownerRoutes.js';
import petRoutes from './src/routes/petRoutes.js';
import appointmentRoutes from './src/routes/appointmentRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/owners', ownerRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});