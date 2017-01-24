class FriendsController < ApplicationController

  # This controller is responsible with seeding the React components for Friend views with json data from the database

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
    friend = Friend.find(params[:id])
    @friend_id = friend.id
    @friend_id.as_json
  end

end
