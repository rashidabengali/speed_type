<template>
  <div class="home">
    <h1>SPEED TYPE</h1>
    <br>
    <img src="https://i.imgur.com/B5MIn6t.gif" alt="gif" />
    <div class="homeButtons">
      <b-row>
        <b-col lg="6" class="pb-2">
          <router-link :to="{ path: 'leaderboard' }"><b-button size="lg" class="animated infinite pulse delay-2s" variant="light">Leader Board</b-button></router-link>
          <br>
          <br>
          <p>Make it to the top of the Leader Board.
            <br>
            Speed Up!
          </p>
        </b-col>

        <b-col lg="6" class="pb-2">
          <router-link :to="{ path: 'signup' }"><b-button size="lg" class="animated infinite pulse delay-2s" variant="light">Sign Up</b-button></router-link>
          <br>
          <br>
          <p>Already a Member? <span><router-link :to="{ path: 'signin' }">Sign In</router-link></span></p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}

</script>

<style scoped>

h1 {
  margin: 20px 10px 10px 10px;
  padding: 10px;
  font-size: 80px;
  letter-spacing: 6px;
  animation: text 3s 1;
}

@keyframes text {
  0%{
    margin-bottom: -40px;
  }
  30%{
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
}

.homeButtons {
  margin: 40px 10px 10px 10px;
  padding: 10px;
}

span a {
  color: silver;
}

span a:hover {
  text-decoration: none;
}

img {
  width: auto;
  height: auto;
  box-shadow:10px 10px 7px rgba(0,0,0,.7);
  animation:
  pulse 3s ease infinite alternate,
  nudge 5s linear infinite alternate;
  border-radius: 10%;
}

@keyframes pulse {
  0%, 100% {
    background-color: red;
  }
  50% {
    background-color: orange;
  }
}

@keyframes nudge {
  0%, 100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(150px, 0);
  }

  80% {
    transform: translate(-150px, 0);
  }
}

</style>
