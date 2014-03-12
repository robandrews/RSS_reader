window.NewReader.Routers.AppRouter = Backbone.Router.extend({
  
  routes: {
    "":"feedsIndex",
    "feeds/:id":"feedShow"
  },
  
  feedsIndex: function(){
    var indexView = new NewReader.Views.FeedIndexView({
      collection: NewReader.Collections.feeds
    })    
    NewReader.Collections.feeds.fetch();
    
    this._swapView(indexView);
  },
  
  feedShow: function(id){
    
    var showView = new NewReader.Views.FeedShowView({
      model: NewReader.Collections.feeds.getOrFetch(id)
    });
    this._swapView(showView);
  },
  
  _swapView: function(newView){
    
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $(".content").html(newView.render().$el);
  }
  
})