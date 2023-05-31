class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
 
  addParagraph(text) {
     const newParagraph = document.createElement('p');
     newParagraph.innerText = text
     this.mainContainerEl.append(newParagraph);
  }

  clearParagraph() {
    //const allParagraphs = document.querySelectorAll('p');
    //allParagraphs 
    document.querySelectorAll('p').forEach(para => {
      para.remove();
    })
  }

}

module.exports = View;