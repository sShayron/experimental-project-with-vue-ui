<template>
  <div id="app">
    <Nav />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Nav from './components/_nav/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body{
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  justify-items: center;
}
body, html {
  margin: 0;
  height: 100%;
}
.btn {
  background-color: #fa4430;
  padding: 10px 20px;
  border: 1px solid #000;
  cursor: pointer;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-bottom: 3px solid black;
  transition: all .3s;
  font-size: 1.2em;
}
.btn:hover {
  text-shadow: 1px 1px 1px black;
  margin-top: 2px;
  border-bottom-width: 1px;
}
#app {
  width: 100%;
}
.container {
  width: 50%;
  margin: 0 auto;
}

table {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  width: 100%;
}
table tr td{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th{
  background-color: rgb(184, 208, 216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.colPequeno {
  width: 5%;
}
</style>
