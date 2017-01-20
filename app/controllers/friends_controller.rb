class FriendsController < ApplicationController

  def index
    @friends = Friend.all
    @friends.as_json
  end

  def new
    @friend = Friend.new
  end

  def show
    @friend = Friend.find(params[:id])
    @gifts = Gift.where(friend_id: @friend.id)
    @gifts.as_json
    @friend.as_json
  end

  def edit
    friend = Friend.find(params[:id])
    @friend_id = friend.id
    @friend_id.as_json
  end

end
