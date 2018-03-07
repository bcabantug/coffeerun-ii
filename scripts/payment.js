//IIFE to start up
(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment=\"form\"]";
  var MESSAGE_SELECTOR = "[data-payment=\"saying\"]";
  var $ = window.jQuery;
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Confirm = App.Confirm;
  var myTruck = new Truck("paid", new DataStore());
  window.myTruck = myTruck;

  var confirm = new Confirm(MESSAGE_SELECTOR); //for initializing message
  var formHandler = new FormHandler(FORM_SELECTOR);


  formHandler.addSubmitHandler(function(data) {
    myTruck.submitPayment.call(myTruck, data);
    confirm.addInfo.call(confirm, data);

    $("#affirmMessage").modal();

  }
    //myTruck.submitPayment.bind(myTruck)
  );
  //console.log(formHandler);
  //
})(window);
