class Word < ApplicationRecord
  validates :word, presence: true

  has_many :scores, dependent: :destroy
end
