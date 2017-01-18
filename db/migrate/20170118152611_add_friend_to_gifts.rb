class AddFriendToGifts < ActiveRecord::Migration[5.0]
  def change
    add_reference :gifts, :friend
  end
end
