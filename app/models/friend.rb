class Friend < ApplicationRecord
  has_many :gifts
  validates :name, :birthday, presence: true
end
