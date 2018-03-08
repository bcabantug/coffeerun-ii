(function (window){
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  //constructor for RemoteDataStore
  function RemoteDataStore(url){
    if(!url){
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val){
    //code will go here
    //jQuery post method to process post request
    $.post(this.serverUrl, val, function(serverResponse){
      /*eslint-disable no-console*/
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function(cb){ //cb is callback
    //code will go here
    $.get(this.serverUrl, function(serverResponse){ //no value passed since we are requesting for data
      /*eslint-disable no-console*/
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  //function to get individual orders
  RemoteDataStore.prototype.get = function (key, cb){
    $.get(this.serverUrl + "/" + key, function (serverResponse){
      console.log(serverResponse);
      cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function (key){
    $.ajax(this.serverUrl + "/" + key,{
      type: "DELETE"
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
