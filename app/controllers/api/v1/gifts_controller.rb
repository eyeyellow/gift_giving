class Api::V1::GiftsController < Api::V1::BaseController

  def show
    @gifts = Gift.where(friend_id: params[:id])
    respond_with @gifts
  end

  def update
    gift = Gift.find(params["id"])
    gift.update_attributes(gift_params)
    respond_with gift, json: gift
  end

  private

  def gift_params
    params.require(:gift).permit(:name, :price, :link)
  end

end