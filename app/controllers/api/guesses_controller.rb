class Api::GuessesController < ApplicationController

  def create
    @guess = Guess.new(params[:guess])
    if @guess.save
      debugger
      Guess.check_guess(@guess)
      render :show
    end
  end

  def show
    @game_over = false
    @missed_letters = []
    @correct_letters = []
    @guessed_words = []
    @guesses_remaining = 6
    @total_guesses = 0
    @success = false
  end

end
