<template>
  
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top" id="nav">
      <ul class="nav nav-navbar">
        <li>
          <router-link to="/" class="liNav">Home</router-link>
        </li>
        <li >
          <router-link to="/about" class="liNav">About</router-link>
        </li>
        <li >
          <router-link to="/supermarket" class="liNav">Supermarket</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  ul {
    li{
      padding: 1%;
      float: left;
      display: flex;
      align-items: center;
      margin: 0 0.5em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .liNav{
    color: white;
    background: #222;
  }
  a:hover{
    color: lightgray;
    //background: #222;
    background-color: #2d2d2d;
    border-radius: 0.4em;
    cursor: pointer;
  }
}
</style>

