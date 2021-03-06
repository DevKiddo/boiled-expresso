'use strict'

// promise resolve and reject callbacks

let onSuccess = function(data, status) {
  $("#result").html(data);
};

let onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$("#button").on('click',function(event) {
    event.stopImmediatePropagation() // avoids multiple requests/events from firing up on button click
  $.get("sayHi") // returns promise
    .done(onSuccess) // resolves promise
    .error(onError); // rejects promise
});