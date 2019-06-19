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

Players can play

![Race](/src/assets/screenshots/race.png "Race")

### Checkout Page

After clicking *Buy Now* button or *Cart Icon* in Navbar. The User can view the **Order Details**. He may **Edit** the quantity of an item or can also **Remove** the product from the buttons provided according to his convenience.

![Checkout](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%202.59.35%20am.png "Checkout")

### Card Payment

Our secure payment method, allows the User to make Payment wit ease.

![Card Payment](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%203.00.39%20am.png "Card Payment")

### Payment Done

![Payment Done](./src/img/screenshots/Screen%20Shot%202019-05-17%20at%203.01.01%20am.png "Payment Done")

Technologies
-----------------------------------------------------
This E-Commerce web application uses mainly **ReactJS** Front-end and **Rails** Back-end with **PostgreSQL** as database and has been deployed on **Heroku**.

***Pamper My Pet*** has the following MVC (Model View Controller) Structure

![MVC](./src/img/screenshots/mvc.png "MVC")

Each **Model** inherits from *ActiveRecord* that does the following in an object oriented fashion:

* Create tables
* Represent associations between Models
* Perform database operations

-----------------------------------------------------
- Front-end uses HTML utilising Google Fonts and web-sourced images
- Styling and animations through CSS, Bootstrap and Favicons
- ReactJS for Front-end Components

#### Major Features:

  * Rails API: JSON endpoint rendering in the Controllers
     * JWT for User Authentication  
     * Stripe API for simulated payments      
  * Windows LocalStorage used in handling Session Data
    * Storing session for current user
    * Storing cart items
  * NPM Packages Applied: Alice Carousel for the Carousel Display in the Home Page, React-Stripe-Elements for the Card Payment
  * `Axios.get` `Axios.post` `Axios.put` Method will save the User's Cart in the database if they Log Out without Purchasing them. Later, if they Login even from some other device, they will be able to view the Cart
  * Gems: BCrypt, JWT, Stripe and Rack-Cors to enable API Endpoint
  * Admin Rights

  ![Add](./src/img/screenshots/add.png "Add")

  ![Edit](./src/img/screenshots/admin2.png "Edit")

Wishlist
----------------------------------------------------

  * Implement Discount or Sale options
  * Simulate Delivery System
  * Introduce User Review for *Pamper My Pet* Products
  * Enable Price Filter in Search Bar.
  * More Animations


### Lints and fixes files
```
npm run lint
```
