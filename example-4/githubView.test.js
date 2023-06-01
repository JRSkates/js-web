/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GithubView = require('./githubView');
const GithubClient = require('./githubClient');
const GithubModel= require('./githubModel');
require('jest-fetch-mock').enableMocks()

xdescribe('GithubView', () => {
  xit('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const client = new GithubClient();
    fetch.mockResponseOnce(JSON.stringify({
      name: 'rails/rails',
      description: 'Ruby on Rails',
      //avatar_url: '<https://avatars.githubusercontent.com/u/4223?v=4">'
    }));

    const model = new GithubModel();

    const view = new GithubView(model, client);

    const buttonEl = document.querySelector('#submit-button');
    const inputEl = document.querySelector('#repo-name-input');
    inputEl.value = 'rails/rails';
    buttonEl.click();
    view.display(client)
    //console.log(document.childElementCount('repo-description'))
    expect(document.getElementById('repo-description').innerText).toBe("")
    //expect(document.querySelector('#repo-name')).toBeNull();
  });
});