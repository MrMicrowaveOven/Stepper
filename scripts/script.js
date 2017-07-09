// import JSONFormatter from 'json-formatter-js'
//
// const myJSON = {ans: 42};
//
// const formatter = new JSONFormatter(myJSON);
//
// document.body.appendChild(formatter.render());


$("#uploadedFile").on("change", function() {
  var data = $("#uploadedFile")[0].files;

  var fr = new FileReader();

  fr.readAsText(data.item(0));
  fr.onload = function(e) {
    console.log(e);
    var result = JSON.parse(e.target.result);
    $('#json-renderer').jsonViewer(result, {collapsed: true});

    $(".jsonBit").on("click", function(ev) {
      $(".jsonBit").removeClass("lightgray");
      $(".json-string").removeClass("lightgray");
      $(".json-toggle").removeClass("lightgray");
      $(ev.target).addClass("lightgray");
      console.log(ev.target.innerHTML);
    });
  };

});
function jsonClicked() {
  // console.log("Yo");
}
// $('#json-renderer').ready(function() {
//   console.log("Loaded!");
// });
