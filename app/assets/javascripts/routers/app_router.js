window.NewReader.Routers.AppRouter = Backbone.Router.extend({
  
  routes: {
    "":"feedsIndex"
  },
  
  feedsIndex: function(){
    var indexView = new NewReader.Views.FeedIndexView({
      collection: NewReader.Collections.feeds
    })    
    NewReader.Collections.feeds.fetch();
    
    this._swapView(indexView)
  },
  
  _swapView: function(newView){
    
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $(".content").html(newView.render().$el);
  }
  
})