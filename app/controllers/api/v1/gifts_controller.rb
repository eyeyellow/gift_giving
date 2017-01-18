class Api::V1::GiftsController < Api::V1::BaseController

  def show
    @gifts = Gift.where(friend_id: params[:id])
    respond_with @gifts
  end

end