class Word < ApplicationRecord
  validates :word, presence: true

  has_many :scores, dependent: :destroy

  attr_accessor :game_over, :missed_letters, :correct_letters, :guessed_words, :guesses_remaining, :total_guesses, :success

  def set_game
    @game_over = false
    @missed_letters = []
    @correct_letters = []
    @guessed_words = []
    @guesses_remaining = 6
    @total_guesses = 0
    @success = false
  end

end
