window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    var feeds = JSON.parse($('#bootstrapped_feeds_json').html());

    NewReader.Collections.feeds = new NewReader.Collections.Feeds(feeds, { parse: true });
    new NewReader.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
