function obtenirMention(note) {
  if (note >= 18) {
    return 'Excellent';
  } else if (note >= 16) {
    return 'Très bien';
  } else if (note >= 14) {
    return 'Bien';
  } else if (note >= 12) {
    return 'Assez Bien';
  } else if (note >= 10) {
    return 'Passable';
  } else if (note >= 8) {
    return 'Insuffisant';
  } else if (note >= 6) {
    return 'Faible';
  } else {
    return 'Médiocre';
  }
}

function afficherMention() {
  const note = prompt("Veuillez entrer la moyenne (doit être comprise entre 0 et 20) :");
  const noteNumerique = parseFloat(note);

  if (!isNaN(noteNumerique) && noteNumerique >= 0 && noteNumerique <= 20) {
    const mention = obtenirMention(noteNumerique);
    alert(`La mention est : ${mention}`);
  } else {
    alert("Veuillez entrer un nombre valide compris entre 0 et 20.");
  }
}

afficherMention();