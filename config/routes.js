exports = module.exports = function(app) {
  
  app.get("/", app.views.landing);
  
  return app;
  
};