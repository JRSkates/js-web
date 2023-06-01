class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');
    const repoImageEl = document.querySelector('#repo-image');
    repoNameEl.append(repoData.name);
    repoDescriptionEl.append(repoData.description);
    repoImageEl.src = repoData.organization.avatar_url;
  }
}

module.exports = GithubView;