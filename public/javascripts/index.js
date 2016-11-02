console.log("hello world");

let $form = $("#ajax-form");

let onSuccess = function(data, status) {
  let img = "<img src='"+data+"'/>";
  $("#result").html(img);
};

let onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  event.preventDefault();
  let mood = $form.find("[name='mood']:checked").val();
  let name = $form.find("[name='name']").val();
  $.get("getCat", {
    mood: mood,
    name: name
  })
    .done(onSuccess)
    .error(onError);
});