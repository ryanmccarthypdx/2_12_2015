describe("wordRanker", function() {
  it("returns a single word", function() {
    expect(wordRanker("cat")).to.eql(["cat"])
  });

});
