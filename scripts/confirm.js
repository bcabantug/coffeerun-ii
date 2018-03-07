(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  //constructor
  function Confirm(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }
  //function to add dialogue
  Confirm.prototype.addInfo = function(payerInfo) {
    var message = new Payed(payerInfo);

    this.$element.append(message.$element);

  };

  function Payed(payerInfo) {
    //wrap in the div to contain the message for the modal box
    var $div = $("<div></div>", {
      "id": "affirmMessage",
      "class": "modal"
    });
    //appending to this tag for the message
    var $p = $("<p></p>");

    //close line for modal box
    var $a = $("<a></a>", {
      "href": "#",
      "rel": "modal:close"
    });

    //generate the message
    var details = "Thank you for your payment, ";
    details += payerInfo.title + " ";
    details += payerInfo.username + ".";

    //append the tree together
    $p.append(details);
    $div.append($p);
    $div.append($a);

    this.$element = $div;
  }


  App.Confirm = Confirm;
  window.App = App;
})(window);
