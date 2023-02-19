function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  // Exemple d'utilisation de la fonction
  let randomNber = randomNumber();
  console.log("Ceci est un nombre aléatoire :", randomNber);
  
  module.exports = randomNumber