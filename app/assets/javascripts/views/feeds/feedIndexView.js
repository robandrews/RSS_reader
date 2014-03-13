window.NewReader.Views.FeedIndexView = Backbone.View.extend({
  
  template: JST["feeds/index"],
  
  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },
  
  render: function(){
    
    var that = this;
    var content = this.template();
    this.$el.html(content);
    
    this.collection.each(function(feedItem) {
        var feedItemView = new NewReader.Views.FeedItemView( { model: feedItem });
        that.$("ul.feeds-index").append(feedItemView.render().$el);
    })

    return this;
    
  }
  
})