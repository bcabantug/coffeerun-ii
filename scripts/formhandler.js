//IIFE
(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  /*eslint-disable no-console*/
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

  FormHandler.prototype.addInputHandler = function(fn){
    console.log("Setting input handler for form");
    this.$formElement.on("input", "[name=\"emailAddress\"]", function (event){
      //event handler code will go here
      var emailAddress = event.target.value;
      //console.log(fn(emailAddress));
      //triggering the validation check
      var message = "";

      if(fn(emailAddress)){ //if email is valid
        event.target.setCustomValidity(""); //setCustomValidity("") sets field as valid
      }else{ //if email is not valid, then return invalid error message
        message = emailAddress + " is not an authorized email address!";
        event.target.setCustomValidity(message);
      }
    });
  };

  App.FormHandler = FormHandler;
  window.App = App;


})(window);
