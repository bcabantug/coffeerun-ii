(function(window){
  "use strict";
  var App = window.App || {};

  var Validation = {
    //assigns isCompanyEmail a function to check
    isCompanyEmail: function(email){
      //validation check for the end of the email to see if it matches email for employees
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;

})(window);
