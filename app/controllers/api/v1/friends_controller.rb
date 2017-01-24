class Api::V1::FriendsController < Api::V1::BaseController

  def show
    @friend = Friend.find(params[:id])
    respond_with @friend
  end

  def update
    friend = Friend.find(params["id"])
    if friend.update_attributes(friend_params)
      respond_with params, json: params
    else
      render json: friend.errors.full_messages, :status => 422
    end
  end

  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      respond_with :api, :v1, @friend
    else
      render json: @friend.errors.full_messages, :status => 422
    end
  end

  private

  def friend_params
    params.require(:friend).permit(:name, :birthday)
  end

end