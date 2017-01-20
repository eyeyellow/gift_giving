class Api::V1::FriendsController < Api::V1::BaseController

  def show
    @friend = Friend.find(params[:id])
    respond_with @friend
  end

  def update
    friend = Friend.find(params["id"])
    friend.update_attributes(friend_params)
    respond_with params, json: params
  end

  def create
    respond_with :api, :v1, Friend.create(friend_params)
  end

  private

  def friend_params
    params.require(:friendInfo).permit(:name, :birthday)
  end

end