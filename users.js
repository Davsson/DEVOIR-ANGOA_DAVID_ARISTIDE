const db = require('../db');
const User = {
getAllUsers: function() {
return new Promise((resolve, reject) => {
db.all('SELECT * FROM user', (err, rows) => {
if (err) {
reject(err);
} else {
resolve(rows);
}
});
});
}, getUserById: function(id) {
return new Promise((resolve, reject) => {
db.get('SELECT * FROM user WHERE id = ?', [id], (err, row) => {
if (err) {
reject(err);
} else {
resolve(row);
}
});
});
}, // Ajoutez les méthodes pour créer, mettre à jour et supprimer un utilisateur
};
module.exports = User