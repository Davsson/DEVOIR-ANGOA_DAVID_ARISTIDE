function demanderNombre() {
  let nombre = prompt("Veuillez entrer un nombre entre 0 et 10:", "");

  // Convertir la réponse en nombre
  nombre = parseInt(nombre, 10);

  // Vérifier que le nombre est bien dans l'intervalle [0, 10]
  if (!isNaN(nombre) && nombre >= 0 && nombre <= 10) {
    // Si le nombre est valide, afficher les nombres inférieurs ou égaux au nombre donné
    for (let i = nombre; i >= 0; i--) {
      console.log(i);
    }
  } else {
    // Si le nombre n'est pas valide, afficher un message d'erreur et redemander un nombre
    console.log("Erreur : le nombre doit être entre 0 et 10. Veuillez réessayer.");
    demanderNombre();
  }
}

// Appel de la fonction pour démarrer le processus
demanderNombre();