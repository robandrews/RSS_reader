window.NewReader.Collections.Entries = Backbone.Collection.extend({
  
  model: NewReader.Models.Feed,
  
  url: function() {
    return "/feeds/" + this.feed.id + "/entries";
  }
  
})