window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewReader.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
