"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _nodeEnvFile = require("node-env-file");

var _nodeEnvFile2 = _interopRequireDefault(_nodeEnvFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

/**
 * Environment file.
 * For more details please see the file .env.example and read the key comments
 */
(0, _nodeEnvFile2.default)(".env");

/**
 * Static directory
 * By default, this application not use any HTML template engine becasue
 * in this point will not render dynamic HTML (process data in server and show it
 * in a HTML).
 */
app.use(_express2.default.static("public"));

app.get("/", function (req, res) {
  var dogs = { "status": "success", "message": "https://dog.ceo/api/img/newfoundland/n02111277_4317.jpg" };

  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(dogs));
});

app.listen(process.env.APP_PORT);
