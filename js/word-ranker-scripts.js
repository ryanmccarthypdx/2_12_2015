var wordRanker = function(input) {
  var inputSplit = input.split(" ");
  var output = [];
  inputSplit.forEach(function(word){
    output.push(word);
  });

  return output;
}
