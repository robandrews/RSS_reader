window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new NewReader.Routers.AppRouter();
    Backbone.history.start();
    
    NewReader.Collections.feeds.fetch();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
