function isPremier(n) {
    // Les nombres moins de 2 ne sont pas premiers par définition.
    if (n < 2){
        return false;
    }
    
    // Vérifiez si n est un multiple d'un nombre entre 2 et la racine carrée de n.
    const limite = Math.sqrt(n);
    for (let i = 2; i <= limite; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    
    // Si aucune division n'a été trouvée, n est premier.
    return true;
}

// Tests
console.log("0", isPremier(0)); // false
console.log("1", isPremier(1)); // false
console.log("2", isPremier(2)); // true
console.log("3", isPremier(3)); // true
console.log("11", isPremier(11)); // true
console.log("12", isPremier(12)); // false