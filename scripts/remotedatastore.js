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
      data: JSON.stringify( //use stringify to take the json data to set as strings to add
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

  //use the callback to get the data from get all to return to

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
        //send the data from serverresponse (data from the deployd database) to cb to callback
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
    $.ajax(this.serverUrl + "?emailAddress=" + key, {
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

  //remove order
  RemoteDataStore.prototype.remove = function (key){
    console.log(key);
    //created variable to keep url since serverUrl gets dereferenced
    var urlink = this.serverUrl;
    $.ajax(this.serverUrl + "?emailAddress=" + key, {
      type: "GET",
      success: function (key){
        //pass the key in again to call the ajax delete
        $.ajax(urlink + "/" + key[0].id,{
          type: "DELETE"
        }
        );
      }
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
