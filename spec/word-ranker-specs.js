describe("wordRanker", function() {
  it("returns a single word", function() {
    expect(wordRanker("cat")).to.eql(["cat"])
  });

  it("returns returns for returns returns returns", function() {
    expect(wordRanker("returns returns returns")).to.eql(["returns"])
  });


  it("returns multiple words in the order they appeared", function() {
    expect(wordRanker("dog cat")).to.eql(["dog", "cat"])
  });

  it("returns multiple words in order of how often they appeared", function() {
    expect(wordRanker("dog cat cat cat cat")).to.eql(["cat", "dog"])
  });

  it("ignores all punctuation", function() {
    expect(wordRanker("i love you!, you@ love you&")).to.eql(["you", "love", "i"])
  });

  it("it ignores case sensitivity", function() {
    expect(wordRanker("i HATE jaVaScriPT, haTe it!!(!)")).to.eql(["hate", "i", "javascript", "it"])
  });
});
