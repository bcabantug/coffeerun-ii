//IIFE for module DataStore
(function(window) {
  "use strict";
  //checks to see if the App property is present to assign, or create new object if not present
  var App = window.App || {};

  function DataStore() {
    //console.log("running the Datastore function");
    this.data = {};
  }
  //function is accessible everytime an instance is created/ function is accessible
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };

  //function to get individual datra
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  //function to return multiple data
  DataStore.prototype.getAll = function() {
    return this.data;
  };

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;

})(window);
