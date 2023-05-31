(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.showButtonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.hideAllButtonEl = document.querySelector("#hide-all-messages-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.showButtonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
          this.hideAllButtonEl.addEventListener("click", () => {
            this.hideAllMessages();
          });
        }
        displayMessage() {
          const inputEl = document.querySelector("#message-input");
          const messageEl = document.createElement("div");
          messageEl.id = "message";
          messageEl.textContent = inputEl.value;
          this.mainContainerEl.append(messageEl);
          console.log("thanks for clicking!");
        }
        hideMessage() {
          const messageEl = document.getElementById("message");
          messageEl.remove();
          console.log("message removed");
        }
        hideAllMessages() {
          const messageEl = document.querySelectorAll("#message");
          messageEl.forEach((message) => {
            message.remove();
          });
          console.log("all messages removed");
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
