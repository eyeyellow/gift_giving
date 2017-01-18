class FriendsController < ApplicationController

  def index
    @friends = Friend.all
  end

  def new
  end

  def show
  end

  def edit
  end

end
