require 'net/http'

class Api::WordsController < ApplicationController
  def create
    @word = Word.find_or_create_by(word: word_params[:secretWord])
    if @word.save
      render :show
    else
      render json: @word.errors.full_messages, status: 422
    end
  end

  def show
    @word = Word.find_by(params[:id])
  end

  def random
    result = Net::HTTP.get(URI.parse('http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words'))
    @words = result.split("\n")
    @word = @words.sample
    respond_to do |format|
      format.json {
        render :random, { word: @word }
      }
    end
  end

  def leveled
    level = params[:level]
    result = Net::HTTP.get(URI.parse("http://linkedin-reach.hagbpyjegb.us-west-2.elasticbeanstalk.com/words?difficulty=#{level}"))
    @words = result.split("\n")
    @word = @words.sample
    respond_to do |format|
      format.json {
        render :leveled, { word: @word }
      }
    end
  end

  private
  def word_params
    params.require(:word).permit(:secretWord, :playerName, :score)
  end
end
