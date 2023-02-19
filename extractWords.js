function extractWords(phrase) {
    // Supprime les caractères de ponctuation et les espaces en début et fin de phrase
    let cleanedPhrase = phrase.replace(/[^\w\s]|_/g, "").trim();
    // Divise la phrase en un tableau de mots
    let wordsArray = cleanedPhrase.split(" ");
    return wordsArray;
  }
  
  // Exemple d'utilisation de la fonction
  let phrase = "Voici l'exemple de la chaines";
  let container = extractWords(phrase);
  console.log(container);
  // Output : [ 'Voici', "l'exemple", 'de', 'la', 'chaines' ]
  module.exports = extractWords