class Register < ActiveRecord::Base
  validates :name, :price, presence: true

  belongs_to :user
end
