import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import GodsJSON from "@/GodsJSON.json";

Vue.use(Vuex);

// Set string variables
const devID = process.env.VUE_APP_SMITE_DEV_ID; 
const authKey = process.env.VUE_APP_SMITE_API_KEY; 


const moment = require("moment");
const time = moment(new Date())
  .utc()
  .format("YYYYMMDDkkmmss");

// Hash to create signature
var md5 = require("md5");
const md5SessionString = devID + "createsession" + authKey + time;
const signature = md5(md5SessionString);

const createsessionURL =
  "https://cors-anywhere.herokuapp.com/http://api.smitegame.com/smiteapi.svc/createsessionJson/" +
  devID +
  "/" +
  signature +
  "/" +
  time;

const store = new Vuex.Store({
  state: {
    posts: [],
    loading: true,
    sessionID: "",
    godsJSONObject: {}
  },
  actions: {
    startSession({ commit }) {
      axios
        .get(createsessionURL)
        .then((resp) => {
          commit("updatePosts", resp.data);
          commit("changeLoadingState", false);
          commit("setSessionID", resp.data.session_id);

          const md5GetGodsString = devID + "getgods" + authKey + time;
          const signature = md5(md5GetGodsString);
          
          const getgodsURL =
            "https://cors-anywhere.herokuapp.com/http://api.smitegame.com/smiteapi.svc/getgodsjson/" +
            devID +
            "/" +
            signature +
            "/" + 
            resp.data.session_id +
            "/" +
            time +
            "/" +
            1;
          return axios.get(getgodsURL);
        })
        .then((resp) => {
          console.log(resp);
          commit("setGodsJSONObject", resp.data)
        })
        .catch((err) => {
          console.log("Failure: " + err);
          // Show message that something went wrong
        });
    },
    startLocalSession({ commit }) {
      commit("setGodsJSONObject", GodsJSON.data)
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    changeLoadingState(state, loading) {
      state.loading = loading;
    },
    setSessionID(state, sessionID) {
      state.sessionID = sessionID;
    },
    setGodsURL(state, getgodsURL) {
      state.getgodsURL = getgodsURL;
    },
    setGodsJSONObject(state, godsJSONObject) {
      state.godsJSONObject = godsJSONObject;
    }
  },
  getters: {
    getGods: (state) => state.godsJSONObject,
  }
});

export default store;
