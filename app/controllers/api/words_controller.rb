require 'net/http'

class Api::WordsController < ApplicationController
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
end
