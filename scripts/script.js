// import JSONFormatter from 'json-formatter-js'
//
// const myJSON = {ans: 42};
//
// const formatter = new JSONFormatter(myJSON);
//
// document.body.appendChild(formatter.render());

// var data = {
//   "foobar": {"groan": "foobaz"}
// };

$("#uploadedFile").on("change", function() {
  var data = $("#uploadedFile")[0].files;

  var fr = new FileReader();

  fr.onload = function(e) {
    console.log(e);
    var result = JSON.parse(e.target.result);
    // var formatted = JSON.stringify(result, null, 2);
    // console.log(formatted);
    $('#json-renderer').jsonViewer(result, {collapsed: true});
  };
  fr.readAsText(data.item(0));

});
// $("#uploadedFile").on("load", function() {
//   var data = $("#uploadedFile")[0].files;
//
//   var fr = new FileReader();
//
//   fr.onload = function(e) {
//     console.log(e);
//     var result = JSON.parse(e.target.result);
//     // var formatted = JSON.stringify(result, null, 2);
//     // console.log(formatted);
//     $('#json-renderer').jsonViewer(result, {collapsed: true});
//   };
//   fr.readAsText(data.item(0));
//
// });

// console.log(data);
