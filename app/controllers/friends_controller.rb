class FriendsController < ApplicationController

  def index
    @friends = Friend.all
    @friends.as_json
  end

  def new
  end

  def show
    @friend = Friend.find(params[:id])
    @friend.as_json
  end

  def edit
  end

end
