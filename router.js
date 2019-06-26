import Vue from "vue";
import Router from "vue-router";
import AboutMe from "./views/AboutMe";
import resume from "./views/resume";
import Gelateria from "./views/Gelateria";
import RosconKing from "./views/RosconKing";
import SushiSonora from "./views/SushiSonora";
import Sneakers from "./views/Sneakers";
import Mannyshutters from "./views/MannyShutters";
import BigBandSanFernando from "./views/BigBandSanFernando";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "AboutMe",
      component: AboutMe
    },

    {
      path: "/resume",
      name: "resume",
      component: resume
    },
    {
      path: "/Gelateria",
      name: "Gelateria",
      component: Gelateria
    },
    {
      path: "/RosconKing",
      name: "RosconKing",
      component: RosconKing
    },
    {
      path: "/SushiSonora",
      name: "SushiSonora",
      component: SushiSonora
    },
    {
      path: "/Sneakers",
      name: "Sneakers",
      component: Sneakers
    },

    {
      path: "/MannyShutters",
      name: "MannyShutters",
      component: Mannyshutters
    },

    {
      path: "/BigBandSanFernando",
      name: "bigBandSanFernando",
      component: BigBandSanFernando
    }
  ]
});
