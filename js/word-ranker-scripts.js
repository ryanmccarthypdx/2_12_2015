var wordRanker = function(input) {
  var inputSplit = input.split(" ");
  var output = [];
  inputSplit.forEach(function(word){
    if (output.indexOf(word) === -1) {
    output.push(word);
    }
  });

  return output;
}
