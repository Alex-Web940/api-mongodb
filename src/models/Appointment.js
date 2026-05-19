import mongoose from 'mongoose'; 
const appointmentSchema = new mongoose.Schema( 
 { 
 date: { 
 type: Date, 
 required: [true, 'La fecha es obligatoria'], 
 }, 
 reason: { 
 type: String, 
 required: [true, 'El motivo de la cita es obligatorio'], 
 trim: true, 
 }, 
 status: { 
 type: String, 
 enum: ['pending', 'completed', 'cancelled'], 
 default: 'pending', // Valor por defecto si no se envía 
 }, 
 pet: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Pet', 
 required: [true, 'La cita debe estar asociada a una mascota'],  }, 
 notes: { 
 type: String, 
 trim: true, 
 }, 
 }, 
 { timestamps: true } 
); 
export default mongoose.model('Appointment', appointmentSchema);
