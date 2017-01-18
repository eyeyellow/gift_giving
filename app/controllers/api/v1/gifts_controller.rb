class Api::V1::GiftsController < Api::V1::BaseController
  def index
    @gifts = Gift.all
    respond_with @gifts
  end
end