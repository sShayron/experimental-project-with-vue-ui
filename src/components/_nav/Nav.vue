<template>
  <div class="container">
    <nav>
      <router-link to="/teachers">Teachers</router-link>
      <router-link to="/students">Students</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bar {
  background-color: rgb(230, 230, 230);
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background-color: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px;
}
nav .router-link-active {
  background-color: rgb(160, 160, 160);
  color: #fff;
}
</style>