const db = require('../db');
const Contact = {
getAllContacts: function() {
return new Promise((resolve, reject) => {
db.all('SELECT * FROM contact', (err, rows) => {
if (err) {
reject(err);
} else {
resolve(rows);
}
});
});
}, getContactsByUserId: function(userId) {
return new Promise((resolve, reject) => {
db.all('SELECT * FROM contact WHERE user_id = ?', [userId], (err, rows) => {
if (err) {
reject(err);
} else {
resolve(rows);
}
});
});
}, // Ajoutez les méthodes pour créer, mettre à jour et supprimer un contact
};
module.exports = Contact;