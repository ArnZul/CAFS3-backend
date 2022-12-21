// alert("Java script has loaded...");

function doTheThing() {
  $.ajax({
    url: window.location.href,
    type: "POST",
    data: {
      key: "value",
    },
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(error);
    },
  });
}
