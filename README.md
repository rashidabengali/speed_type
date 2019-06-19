# SPEED TYPE

[Play Here](https://rashidabengali.github.io/speed_type/#/)

![Home Page](/src/assets/screenshots/home.png "Home Page")

A game that will help improve your **Typing Speed** while making it immensely enjoyable for you to play.

A new *Player* has to *Sign Up* with an authentic email address and verify it to create an account and an existing one has to simply *Sign In*

### Sign Up Page

![Sign Up](/src/assets/screenshots/signup.png "Sign Up")

### Sign In Page

![Sign In](/src/assets/screenshots/signin.png "Sign In")

### Leader Board

Player with the fastest typing speed will make it to the top ranks of the Leader Board.

![Leader Board](/src/assets/screenshots/leaderboard.png "leaderboard")

### Single Player Game

Players can take a ***Tour of Instructions*** to understand the game rules.

![Instructions](/src/assets/screenshots/instructions.png "Instructions")

Players need to type the sentence rendered on the screen. As soon as he/she starts typing, the ***Timer*** will *start* and the typing ***Speed*** too will get updated at regular intervals.

![Game](/src/assets/screenshots/game.png "Game")

The sentence will keep turning *green* ONLY if the player has typed it ***correctly***. Once, the entire sentence turns green then the timer will *stop*.

### Create/Join Race

Players can play with their fellow friends only by creating or joining a race room.

![Race](/src/assets/screenshots/race.png "Race")

### Multiplayer Game

The *name*, typing *speed* and the *percentage accuracy* of the players who have joined the room will be displayed on the screen.

The speed and the the percentage accuracy will get updated in real time as the players type.

![Multiplayer Game](/src/assets/screenshots/multi.png "Multiplayer")

Technologies
-------------------------------------------
This game is built with **VueJS** as Front-end and **Firebase** as Back-end.

- Front-end uses HTML utilising Google Fonts and web-sourced images
- Styling and animations through CSS, Bootstrap and Favicons
- VueJS for Front-end Components

#### Major Features:

  * Firebase User Authentication and Email Verification
  * NPM Packages Applied:
    * statman-stopwatch
    * txtgen
    * vue-tour
  * `.get()` `.add()` `.update()` `.onSnapshot()` Methods
    * Create new users *Profile* with a unique *userId*
    * Add scores to the database when a player successfully finishes playing a game that renders in the Leader Board
    * Create/join race by adding the userId and creating a new *raceId* each time and then updating the race room every time a new player joins in
    * Real time updates in speed and percentage accuracy that renders in the Multiplayer Game.

Wishlist
-------------------------------------------------

  * Rank the players in accordance with their typing speed once the game is over in the Multiplayer Game
  * More Animations
