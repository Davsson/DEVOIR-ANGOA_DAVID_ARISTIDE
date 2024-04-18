const express = require('express');
const router = express.Router();
const User = require('../models/user');
router.get('/', async (req, res) => {
try {
const users = await User.getAllUsers();
res.json(users);
} catch (error) {
res.status(500).json({ error: error.message });
}
});
// Ajoutez les autres routes CRUD pour les utilisateurs
module.exports = router;