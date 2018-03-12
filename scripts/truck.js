(function(window) {
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function(order) {
    /*eslint-disable no-console*/
    console.log("Adding order for " + order.emailAddress); /*ESLint error: unexpected console statment*/
    this.db.add(order.emailAddress, order);

  };

  Truck.prototype.deliverOrder = function(customerId) {
    console.log("Delivering order for " + customerId); /*ESLint error: unexpected console statment*/
    this.db.remove(customerId);
  };

  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + "has pending orders: "); /*ESLint error: unexpected console statment*/
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id)); /*ESLint error: unexpected console statment*/
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;


})(window);
