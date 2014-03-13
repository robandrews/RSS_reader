window.NewReader.Views.FeedShowView = Backbone.View.extend({
  template:JST["feeds/show"],
  
  initialize: function(){
    this.listenTo(this.model.entries(), "add change", this.render),
    this.listenTo(this.model, "change", this.render)
  },
  render:function(){
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  }
})