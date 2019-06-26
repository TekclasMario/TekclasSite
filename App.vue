<template>
  <v-app id="applebottom" class="black lighten-4">
    <Navbar/>
    <v-content>
      <transition enter-active-class="animated slideInUp">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<style>
/*<-------*Animate CSS* ---------->*/

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

/* Global CSS local can be found under socped on individual pages */

#navv {
  position: static;
}

.page {
  position: relative !important;
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.9s ease-out !important;
}

a:hover {
  color: violet;
}

/* Global Media Queries  */

/* @media screen and (max-width: 2780px) {
  .page {
    position: static;
    margin-top: 0rem;
    margin-left: 0rem;
    background-color: black;
    height: 100%;
  }
}

@media screen and (max-width: 780px) {
  .page {
    position: relative;
    margin-top: 6rem;
    margin-left: 0.5rem;
    padding-left: 0rem;
  }
}

@media screen and (max-width: 600px) {
  .page {
    margin
    position: static;
    margin-left: 0rem;
    padding-left: 0rem;
  }
} */
</style>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },

  data() {
    return {
      //
    };
  }
};
</script>
