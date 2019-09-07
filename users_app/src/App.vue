<template>
  <div id="app">
    <div class="wrapper">
      <User />
    </div>
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "App",
  components: {
    User
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.wrapper {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>