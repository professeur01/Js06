function pattern(n) {
    let output = '';
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {

        output += '* ';
      }
      output += '\n';
    }

           console.log(output);
  }
  
  pattern(5);
  module.exports = pattern;
  