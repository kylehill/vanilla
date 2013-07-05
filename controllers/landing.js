exports = module.exports = function(req, res, next) {
  req.app.views.landing(req, res, {hello: "World"});
}