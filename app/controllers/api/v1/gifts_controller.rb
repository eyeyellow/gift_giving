class Api::V1::GiftsController < Api::V1::BaseController

  def show
    @gifts = Gift.where(friend_id: params[:id])
    respond_with @gifts
  end

  def create
    respond_with :api, :v1, Gift.create(gift_params)
  end

  def update
    gift = Gift.find(params["id"])
    gift.update_attributes(gift_params)
    respond_with gift, json: gift
  end

  def destroy
    respond_with Gift.destroy(params[:id])
  end

  private

  def gift_params
    params.require(:gift).permit(:name, :price, :link, :friend_id)
  end

end