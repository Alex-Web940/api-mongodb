import mongoose from 'mongoose'; 
const ownerSchema = new mongoose.Schema( 
 { 
 name: { 
 type: String, 
 required: [true, 'El nombre es obligatorio'], 
 trim: true, 
 }, 
 email: { 
 type: String, 
 required: [true, 'El email es obligatorio'],
    unique: true, 
 lowercase: true, 
 trim: true, 
 }, 
 phone: { 
 type: String, 
 required: [true, 'El teléfono es obligatorio'], 
 }, 
 }, 
 { timestamps: true } // Agrega createdAt y updatedAt automáticamente ); 
);
 export default mongoose.model('Owner', ownerSchema);
