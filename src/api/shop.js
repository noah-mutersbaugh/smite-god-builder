import axios from "axios";
import Vuex from "vuex";
import Vue from "vue";
import GodsJSON from "@/GodsJSON.json";
import ItemsJSON from "@/ItemsJSON.json";

Vue.use(Vuex);

// Set string variables
const devID = process.env.VUE_APP_SMITE_DEV_ID; 
const authKey = process.env.VUE_APP_SMITE_API_KEY; 


const moment = require("moment");
const time = moment(new Date())
  .utc()
  .format("YYYYMMDDHHmmss");

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
    godsJSONObject: {},
    itemsJSONObject: {},
    items: {}
  },
  actions: {
    startSession({ commit, state }) {
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
          commit("setGodsJSONObject", resp.data);

          const md5GetItemsString = devID + "getitems" + authKey + time;
          const signature = md5(md5GetItemsString);

          const getitemsURL =
            "https://cors-anywhere.herokuapp.com/http://api.smitegame.com/smiteapi.svc/getitemsjson/" +
            devID +
            "/" +
            signature +
            "/" + 
            state.sessionID +
            "/" +
            time +
            "/" +
            1;
            axios.get(getitemsURL)
            .then(resp => {
              commit("setItemsJSONObject", resp.data);
            });
        })
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log("Failure: " + err);
          // Show message that something went wrong
        });
    },
    startLocalSession({ commit }) {
      commit("setGodsJSONObject", GodsJSON);
      commit("setItemsJSONObject", ItemsJSON);
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
    },
    setItemsJSONObject(state, itemsJSONObject) {
      // Parse Items JSON file to ensure consistency in category names
      state.itemsJSONObject = itemsJSONObject;
      itemsJSONObject.forEach(item => {
        item.ItemDescription.Menuitems.forEach(menuItem => {
          let normalizedCategory = menuItem.Description.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()).trim();  //title case 
          normalizedCategory = normalizedCategory.replace(/:$/g, ""); // remove trailing colon
          if (state.items[normalizedCategory] == undefined){
            state.items[normalizedCategory] = [];
          }
          state.items[normalizedCategory].push(item);
        });
      })
    }
  },
  getters: {
    getGods: (state) => state.godsJSONObject,
    getItems: (state) => state.items
  }
});

export default store;
