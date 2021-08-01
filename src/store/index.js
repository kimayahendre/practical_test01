import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
})

Vue.use(Vuex);

const state = {
  posts: []
};

const getters = {
};

const actions = {
  async GetAllUsers() {
    try {
      let response = await axiosInstance.get("users")
      return response.data

    } catch (exception) {
      return exception
    }
  },
  async ViewAllPost() {
    try {
      let response = await axiosInstance.get("posts")
      return response.data
    } catch (exception) {
      return exception
    }
  },
  async GetUserName({ commit }, userId) {
    try {
      let response = await axiosInstance.get("users", { params: { id: userId } })
      commit("createposts", response.data)
      return response.data
    } catch (exception) {
      return exception
    }
  },
  async ViewUserPost({ commit }, userId) {
    try {
      let response = await axiosInstance.get("posts", { params: { userId: userId } })
      commit("createposts", response.data)
      return response.data
    } catch (exception) {
      return exception
    }
  },
  async CreatePosts({ commit }, posts) {
    try {
      let response = await axiosInstance.post("posts", posts)
      commit("createposts", response.data)
    } catch (exception) {
      return exception
    }
  }
};

const mutations = {
  user(state, userDetails) {
    state.userprofile.push(userDetails)
  },
  createposts(state, postDetails) {
    state.posts.push(postDetails)
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
