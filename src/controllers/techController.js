const controller = {};

controller.index = (req, res) => {
    res.render('index.html');
};

module.exports = controller;