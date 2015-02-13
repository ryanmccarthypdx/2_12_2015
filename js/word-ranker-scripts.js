var wordRanker = function(input) {
  var ignoredChars = /[+-.,!@#$%^&*();/|<>"']/g;
  var cleanedInput = input.replace(ignoredChars, "").toLowerCase();
  var inputSplit = cleanedInput.split(" ");
  var holdingPen = [];
  var output = [];
  var tallyPen = [];
  var tally = {};

  inputSplit.forEach(function(word){
    if (holdingPen.indexOf(word) === -1) {
    holdingPen.push(word);
    tally[word] = 1;
    } else {
    tally[word] = tally[word] + 1;
    }
  });

  holdingPen.forEach(function(word){
    var wordTally = tally[word];
    tallyPen.push(wordTally);
  });

  for (var i = 1000; i > 0; i--) {
    if (tallyPen.indexOf(i) > -1){
      while (tallyPen.indexOf(i) !== -1) {
        var pullIndex = tallyPen.indexOf(i);
        output.push(holdingPen[pullIndex]);
        delete tallyPen[pullIndex];
        delete holdingPen[pullIndex];
      }
    }
  }

  return output;
}

$(document).ready(function() {
  $("form#input").submit(function(event){
    $(".result").delete();
    var input = $("input#word-input").val();
    var outputArray = wordRanker(input);

    outputArray.forEach(function(word) {
      $(".output").append("<li>"+word+"</li>");
    });

    $(".result").show();

    event.preventDefault();
  });
});
