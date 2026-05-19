import Pet from '../models/Pet.js';

export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.json({ success: true, data: pets });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('owner');
    if (!pet) return res.status(404).json({ success: false, message: 'Mascota no encontrada' });
    res.json({ success: true, data: pet });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json({ success: true, data: pet });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pet) return res.status(404).json({ success: false, message: 'Mascota no encontrada' });
    res.json({ success: true, data: pet });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    if (!pet) return res.status(404).json({ success: false, message: 'Mascota no encontrada' });
    res.json({ success: true, message: 'Mascota eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};