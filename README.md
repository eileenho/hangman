# Comfy Cat - A.K.A. Hangman
Comfy cat is a version of Hangman made with React.js and Ruby on Rails.

##Play Online
[Comfy Cat][live-link]

![hangman][hangman]

##Play Locally
1. Clone or download the game repository
2. Run `npm install` in game directory
3. Start `rails server`
4. Play game at `localhost:3000`

##Features
* 10 varying levels of game play
* Ability to guess a letter or the whole word
* Score display for each word (featuring an arcade-style list of players who have previously guessed the word), as well as the average number of guesses it takes players to guess the word

##Implementation

###Frontend - Game

I used React.js to implement the game play of Hangman because of the flexibility in rendering separate game components on a single page, which each automatically updates on state changes.  Components can update to show various stages of game play - such as the number of guesses remaining, or what letters and words have already been guessed.

When the page first loads, an ajax request is made to the Rails backend which retrieves a random word via LinkedIn's provided API.  This sets the secret word so that the correct number of spaces can be displayed on the board.  Score data is also returned with this request, and is displayed if available.

Users play the game by submitting guesses in the `guess_form` component.  After getting a guess, different methods will be called depending on whether the guess is a letter, a word, or the last guess of the game.  If the state is changed via `this.setState`, a callback is passed in as an additional argument to ensure that the component will update after the state is set.

For example, `this.checkGuess` below:

```
updateCurrentGuess(letter) {
  let newCurrentGuess = [];
  let secretWordLetters = this.state.secretWord.split("");
  secretWordLetters.map((x, i) => {
    if (this.state.currentGuess[i] === "_") {
      if (secretWordLetters[i] === letter) {
        newCurrentGuess.push(letter);
      } else {
        newCurrentGuess.push("_");
      }
    } else {
      newCurrentGuess.push(secretWordLetters[i]);
    }
  });
  this.setState({
    currentGuess: newCurrentGuess
  }, this.checkGuess);
}
```
###Backend
I set up a Rails backend so that calls could be made to the provided API without running into CORS issues.  The database is also set up to store words that have been played, so that scores can also be stored for each word that has been played through an association.

##Next Steps
* Move game logic to the backend so that the secret word cannot actually be discovered by the player via the front end
* Add user account creation and login so that users can have a record of words that they have played.  This would also preserve uniqueness of player names in the Scores Component
* Render a warning alert or modal for when a user guesses a letter or word that has already been guessed (currently only a console.log)

[live-link]: http://comfy-cat.herokuapp.com/#/
[hangman]: ./hangman.png
