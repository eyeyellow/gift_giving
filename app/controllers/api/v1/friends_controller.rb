class Api::V1::FriendsController < Api::V1::BaseController

  # This controller response with Friend information used with the ajax calls.

  def show
    @friend = Friend.find(params[:id])
    respond_with @friend
  end

  def update
    friend = Friend.find(params["id"])
    if friend.update_attributes(friend_params)
      respond_with params, json: params
    else
      errors = friend.errors.full_messages.as_json
      respond_with errors, json: { errors: errors }
    end
  end

  def create
    @friend = Friend.new(friend_params)
    if @friend.save
      respond_with :api, :v1, @friend
    else
      errors = @friend.errors.full_messages.as_json
      respond_with errors, json: { errors: errors }
    end
  end

  private

  def friend_params
    params.require(:friend).permit(:name, :birthday)
  end

end