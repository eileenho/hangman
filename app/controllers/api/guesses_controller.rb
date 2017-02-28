class Api::GuessesController < ApplicationController

  def create
    @guess = Guess.new(guess_params)
    if @guess
      check_guess(@guess)
    end
  end


  private
  def guess_params
    params.require(:guess).permit(:guess)
  end
end
