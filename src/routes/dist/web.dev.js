"use strict";

var express = require('express');

var router = express.Router(); //Llamar al modelo

var Tech = require('../models/Tech'); // Routes GET / POST / PUT / DELETE


router.get('/', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('index.html');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/details', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.render('details.html');

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/api/details', function _callee3(req, res) {
  var tech;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Tech.find());

        case 2:
          tech = _context3.sent;
          res.json(tech);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post('/api/details', function _callee4(req, res) {
  var tech;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          tech = new Tech(req.body);
          console.log(tech);
          _context4.next = 4;
          return regeneratorRuntime.awrap(tech.save());

        case 4:
          res.json({
            status: 'Elemento guardado'
          });

        case 5:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.get('/api/details/:id', function _callee5(req, res) {
  var tech;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Tech.findById(req.params.id));

        case 2:
          tech = _context5.sent;
          res.json(tech);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
router.put('/api/details/:id', function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(Tech.findByIdAndUpdate(req.params.id, req.body));

        case 2:
          res.json({
            status: 'Elemento actualizado'
          });

        case 3:
        case "end":
          return _context6.stop();
      }
    }
  });
});
router["delete"]('/api/details/:id', function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(Tech.findByIdAndRemove(req.params.id, req.body));

        case 2:
          res.json({
            status: 'Elemento depurado'
          });

        case 3:
        case "end":
          return _context7.stop();
      }
    }
  });
}); // Exportar las rutas

module.exports = router;