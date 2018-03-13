//IIFE to start up
(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order = \"form\"]";
  var CHECKLIST_SELECTOR = "[data-coffee-order = \"checklist\"]";
  var SERVER_URL = "http://localhost:2403/coffeeorders";
  var App = window.App;
  var Truck = App.Truck;
  //var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  // var webshim = window.webshim;
  var myTruck = new Truck("ncc-1701", remoteDS ); //new DataStore()
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

  //
  //checkList.addRow(myTruck.printOrder(myTruck));
  //
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  //call to put inputHandler for Validation.isCompanyEmail
  formHandler.addInputHandler(Validation.isCompanyEmail);

  //console.log(formHandler);
  //
})(window);
