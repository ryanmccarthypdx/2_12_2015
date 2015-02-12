describe("wordRanker", function() {
  it("returns a single word", function() {
    expect(wordRanker("cat")).to.eql(["cat"])
  });

  it("returns multiple words in the order they appeared", function() {
    expect(wordRanker("dog cat")).to.eql(["dog", "cat"])
  });

  it("returns returns for returns returns returns", function() {
    expect(wordRanker("returns returns")).to.eql(["returns"])
  });

  it("returns multiple words in order of how often they appeared", function() {
    expect(wordRanker("dog cat cat")).to.eql(["cat", "dog"])
  });
});
