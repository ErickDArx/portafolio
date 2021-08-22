"use strict";

var controller = {};

controller.index = function (req, res) {
  res.render('index.html');
};

module.exports = controller;