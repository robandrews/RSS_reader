class FeedsController < ApplicationController
  def index
    respond_to do |format|
      format.html { render :index }
      Feed.all.each(&:reload);
      format.json do 
        Feed.all.each do |feed|
          render :json => feed.to_json(:include => :entries)
        end
      end
    end
  end
  
  def show
    @feed = Feed.find(params[:id])

    
    if @feed
    
      puts "feed found: #{@feed.title}"
      render :json => @feed
    else
      render :json => @feed.errors, :status => :unprocessable_entity
    end
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
