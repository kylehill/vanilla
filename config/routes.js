exports = module.exports = function(app) {
  
  app.get("/", app.controllers.landing);
  
  return app;
  
};