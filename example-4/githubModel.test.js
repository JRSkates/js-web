const GithubModel= require('./githubModel');

describe('GithubModel', () => {
  it('constructs', () => {
    model = new GithubModel();
    expect(model.getRepoInfo()).toEqual(null);
  });
});