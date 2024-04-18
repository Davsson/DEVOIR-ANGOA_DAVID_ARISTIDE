const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
router.get('/', async (req, res) => {
try {
const contacts = await Contact.getAllContacts();
res.json(contacts);
} catch (error) {
res.status(500).json({ error: error.message });
}
});
// Ajoutez les autres routes CRUD pour les contacts
module.exports = router