window.NewReader.Models.Entry = Backbone.Model.extend({
  
  initialize:function(feed_id){
    this.feed_id = feed_id
  },
  
  url: function(){
    return "feeds/" + this.feed_id + "/entries";
  }
  
  
})