(function (window){
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;
  /*eslint-disable no-console*/

  //constructor for RemoteDataStore
  function RemoteDataStore(url){
    if(!url){
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val){
    //code will go here
    // //jQuery post method to process post request
    // $.post(this.serverUrl, val, function(serverResponse){
    // /*eslint-disable no-console*/
    //   console.log(serverResponse);
    // });

    $.ajax(this.serverUrl, {
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify( //use parse to parse the object data recieved
        //title: "Walk the dog"
        val
      ),
      success: function(serverResponse) {
        // Do something
        console.log(serverResponse);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };

  RemoteDataStore.prototype.getAll = function(cb){ //cb is callback cb
  //   //code will go here
    // $.get(this.serverUrl, function(serverResponse){
    //   console.log(serverResponse);
    //   cb(serverResponse);
    // });
    $.ajax(this.serverUrl, {
      type: "GET",
      success: function(serverResponse) {
        // Do something
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });

  //   $.get(this.serverUrl, function (serverResponse) { //no value passed since we are requesting for data
  //     /*eslint-disable no-console*/
  //     console.log(serverResponse);
  //     cb(serverResponse);
  //     //cb(serverResponse);
  //   });
  };

  //function to get individual orders
  RemoteDataStore.prototype.get = function (key, cb){
    // $.get(this.serverUrl + "/" + key, function (serverResponse){
    //   console.log(serverResponse);
    //   cb(serverResponse);
    // });
    $.ajax(this.serverUrl + "/" + key, {
      type: "GET",
      success: function(serverResponse) {
        // Do something
        console.log(serverResponse);
        cb(serverResponse);
      },
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };

  RemoteDataStore.prototype.remove = function (key){
    $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
