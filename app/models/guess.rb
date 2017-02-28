class Guess < ApplicationRecord
  attr_accessor :guess

  def check_guess(guess)
    if @guesses_remaining > 1
      if guess.length == 1
        check_letter(guess)
      else
        check_word(guess)
      end
    else
      check_last_guess(guess)
    end
  end

  def check_letter(guess)
    if @correct_letters.include?(guess) || @missed_letters.include?(guess)
      render json: ["You've already guessed this letter!"]
    elsif @secret_word.include?(guess)
      @correct_letters << guess
      @total_guesses += 1
    else
      @missed_letters << guess
      @guesses_remaining -= 1
      @total_guesses += 1
    end
  end

  def check_word(guess)
    if @secret_word == guess
      @game_over = true
      @total_guesses += 1
      @success = true
    else
      @total_guesses += 1
      @guessed_words << guess
      @guesses_remaining -= 1
    end
  end

  def check_last_guess(guess)
    if guess.length == 1
      if @correct_letters.include?(guess) || @missed_letters.include?(guess)
        render json: ["You've already guessed this letter!"]
      elsif @secret_word.include?(guess)
        @correct_letters << guess
        @game_over = true
        @total_guesses += 1
        @success = true
      else
        @missed_letters << guess
        @guesses_remaining -= 1
        @total_guesses += 1
        @game_over = true
      end
    else
      if guess == @secret_word
        @total_guesses += 1
        @game_over = true
        @success = true
      else
        @total_guesses += 1
        @guessed_words << guess
        @guesses_remaining -= 1
        @game_over = true
      end
    end
  end

end
