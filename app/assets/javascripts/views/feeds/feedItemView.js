window.NewReader.Views.FeedItemView = Backbone.View.extend({
  tagName: "li",
  template: JST["feeds/item"],
  
  render: function(){
    
    var content = this.template({ feedItem: this.model });
    
    this.$el.html(content);
    return this;
  }
})