var JSONFormatter = require('json-formatter-js');

var myJSON = {ans: 42};

var formatter = new JSONFormatter(myJSON);

$("#JSON-visual").appendChild(formatter.render());
