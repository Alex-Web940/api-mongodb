import Owner from '../models/Owner.js';

export const getOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json({ success: true, data: owners });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOwnerById = async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) return res.status(404).json({ success: false, message: 'Dueño no encontrado' });
    res.json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createOwner = async (req, res) => {
  try {
    const owner = await Owner.create(req.body);
    res.status(201).json({ success: true, data: owner });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!owner) return res.status(404).json({ success: false, message: 'Dueño no encontrado' });
    res.json({ success: true, data: owner });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByIdAndDelete(req.params.id);
    if (!owner) return res.status(404).json({ success: false, message: 'Dueño no encontrado' });
    res.json({ success: true, message: 'Dueño eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};