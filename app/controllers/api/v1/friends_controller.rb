class Api::V1::FriendsController < Api::V1::BaseController

  def show
    @friend = Friend.find(params[:id])
    respond_with @friend
  end

end