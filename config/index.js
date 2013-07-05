exports = module.exports = function(app) {

  app = (require("./views"))(app);
  
  app = (require("./controllers"))(app);
  
  app = (require("./routes"))(app);
  
  return app;
};