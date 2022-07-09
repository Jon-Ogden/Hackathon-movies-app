class Movie < ApplicationRecord
  belongs_to :director
  has_many :actors
  has_many :likes
  has_many :users, through: :likes
end
