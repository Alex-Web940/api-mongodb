import mongoose from 'mongoose'; 
const petSchema = new mongoose.Schema( 
 { 
 name: { 
 type: String, 
 required: [true, 'El nombre de la mascota es obligatorio'],  trim: true, 
 }, 
 species: { 
 type: String, 
 // enum limita los valores aceptados 
 enum: ['dog', 'cat', 'bird', 'other'], 
 required: [true, 'La especie es obligatoria'], 
 }, 
 age: { 
 type: Number, 
 min: [0, 'La edad no puede ser negativa'], 
 }, 
 // ObjectId que referencia al modelo Owner 
 owner: { 
 type: mongoose.Schema.Types.ObjectId, 
 ref: 'Owner', 
 required: [true, 'La mascota debe tener un dueño'], 
 }, 
 }, 
 { timestamps: true } 
); 
export default mongoose.model('Pet', petSchema);
