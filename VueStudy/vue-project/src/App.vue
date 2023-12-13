<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/databinding">databinding</router-link>
    <router-link to="/form">form</router-link>
    <router-link to="/login">login</router-link> 
    <router-link to="/table">table</router-link>
    <router-link to="/a">a</router-link>
    <router-link to="/b">b</router-link>     
    <router-link to="/maincomponent">maincomponent</router-link>     
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
