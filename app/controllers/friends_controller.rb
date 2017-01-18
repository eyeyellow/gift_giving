class FriendsController < ApplicationController

  def index
    @friends = Friend.all
    @friends.as_json
  end

  def new
  end

  def show
    @friend = Friend.find(params[:id])
    @gifts = Gift.where(friend_id: @friend.id)
    @gifts.as_json
    @friend.as_json
  end

  def edit
  end

end
