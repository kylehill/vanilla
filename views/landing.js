exports = module.exports = function(req, res, next) {
  res.render("landing", {hello: "World"});
}