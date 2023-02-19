function inverseNumber(nombre) {
    if (nombre === 0) {
      return "0 n'a pas d'inverse";
    } else {
      return 1 / nombre;
    }
  }
  
  // Exemples d'utilisation de la fonction
  console.log(inverseNumber(4)); // Output : 0.25
  console.log(inverseNumber(0)); // Output : 0 n'a pas d'inverse
  module.exports = inverseNumber
  