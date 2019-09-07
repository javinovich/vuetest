import axios from "axios";

const state = {
  users: []
};

const getters = {
  allUsers: state => state.users
};

const actions = {
  async getUsers({ commit }) {
    const response = await axios.get(
      "https://my-user-manager.herokuapp.com/users"
    );
    commit("setUsers", response.data);
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  newUser: (state, user) => state.users.unshift(user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
