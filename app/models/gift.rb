class Gift < ApplicationRecord
  belongs_to :friend
  validates :name, presence: true
end
