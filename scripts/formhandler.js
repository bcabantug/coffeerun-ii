//IIFE
(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    //code will go here
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    /*ESLint error: unexpected console statment*/
    console.log("Setting submit handler for form");

    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value); /*ESLint error: unexpected console statment*/
      });
      console.log(data); /*ESLint error: unexpected console statment*/
      fn(data);
      this.reset();
      this.elements[0].focus();
    });

  };

  App.FormHandler = FormHandler;
  window.App = App;


})(window);
