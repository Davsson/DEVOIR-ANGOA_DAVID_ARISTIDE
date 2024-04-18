const mysql = require('mysql');
// Créez une connexion à la base de données
const db = mysql.createConnection({
host: 'localhost', user: 'ANGOA DAVID ARISTIDE', password: 'DAVID225', database: 'GUAPMAN' });
// Connectez-vous à la base de données
db.connect((err) => {
if (err) {
console.error('Erreur de connexion à la base de données :', err);
return;
}
console.log('Connecté à la base de données MySQL');
});
module.exports = db;