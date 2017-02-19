class Score < ApplicationRecord
  validates :player_name, :score, presence: true
  
  belongs_to :word
end
