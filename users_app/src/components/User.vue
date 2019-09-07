<template>
  <div class="container">
    <h1>Users</h1>
    <div class="users">
      <div class="user" v-for="user in allUsers" :key="user.id">
        <img src="../assets/userpic.png" />
        <p>ID: {{user.id}}</p>
        <p>Name: {{user.name}}</p>
        <p>email: {{user.email}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import User from "./User.vue";
export default {
  name: "User",
  methods: {
    ...mapActions(["getUsers"])
  },
  computed: mapGetters(["allUsers"]),
  created() {
    this.getUsers();
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.users {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
.user {
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #41b883;
  text-align: center;
  position: relative;
  padding: 1rem;
}
img {
  max-width: 100px;
}

@media (max-width: 500px) {
  .users {
    grid-template-columns: 1fr;
  }
}
</style>