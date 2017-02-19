class Api::ScoresController < ApplicationController
  def create
    @new_word_id = Word.find_by_word(params[:score][:secretWord]).id
    @score = Score.new(score: params[:score][:score], player_name: params[:score][:playerName], word_id: @new_word_id)
    if @score.save
      render :show
    else
      render json: @score.errors.full_messages, status: 422
    end
  end

  def show
    @score = Score.find_by(word_id: @new_word_id)
  end
end
