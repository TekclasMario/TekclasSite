<template>
  <nav id="navv">
    <v-snackbar class="pa-5 mt-5" v-model="snackbar" :timeout="6000" top color="purple">
      <span>WOOO!! HOO!! Your Message has been received! =) I will be contacting you within 24 hours.</span>
      <v-btn flat color="white" @click="snackbar = false">close</v-btn>
    </v-snackbar>

    <v-toolbar color="black" flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text animated animationmn"></v-toolbar-side-icon>
      <h4 class="text-uppercase grey--text hidden-md-and-up">menu</h4>

      <v-spacer></v-spacer>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Tekclas</span>
        <span>Designs</span>
      </v-toolbar-title>

      <!-- dropdown menu -->
      <v-menu class="hidden-sm-and-down" offset-y v-model="submenu">
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>

          <v-menu offset-x open-on-hover>
            <v-list-tile slot="activator">
              <v-list-tile-title>Projects on VueJs</v-list-tile-title>
            </v-list-tile>
            <v-list dense>
              <v-list-tile
                @click="submenu = false"
                v-for="link in vuejs"
                :key="link.text"
                router
                :to="link.route"
              >
                <v-list-tile-content>
                  <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
          <br>
          <v-menu offset-x open-on-hover>
            <v-list-tile slot="activator">
              <v-list-tile-title>Projects on ReactJs</v-list-tile-title>
            </v-list-tile>
            <v-list dense>
              <v-list-tile
                @click="submenu = false"
                v-for="link in reactjs"
                :key="link.text"
                router
                :to="link.route"
              >
                <v-list-tile-content>
                  <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
          <br>
          <v-menu offset-x open-on-hover>
            <v-list-tile slot="activator">
              <v-list-tile-title>Projects on GoCentral</v-list-tile-title>
            </v-list-tile>
            <v-list dense>
              <v-list-tile
                @click="submenu = false"
                v-for="link in gocentral"
                :key="link.text"
                router
                :to="link.route"
              >
                <v-list-tile-content>
                  <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <Popup @projectAdded="snackbar = true"/>
    </v-toolbar>
    <!-- Drawer menu -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex mt-3>
          <v-layout justify-center>
            <v-avatar class="mb-2" size="120">
              <img src="/colors.png">
            </v-avatar>
          </v-layout>
          <p class="white--text subheading mt-2">DESIGNS BY MARIO</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-content>
            <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <p class="title mt-2 ml-2 white--text font-weight-light text-xs-center">Projects On VueJs</p>
        <v-list-tile v-for="link in vuejs" :key="link.text" router :to="link.route">
          <v-list-tile-content>
            <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <p class="title mt-2 ml-2 white--text font-weight-light text-xs-center">Projects On ReactJS</p>
        <v-list-tile v-for="link in reactjs" :key="link.text" router :to="link.route">
          <v-list-tile-content>
            <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <p class="title mt-2 ml-2 white--text font-weight-light text-xs-center">Projects GoCentral</p>
        <v-list-tile v-for="link in gocentral" :key="link.text" router :to="link.route">
          <v-list-tile-content>
            <v-list-tile-title class="black--text text-xs-center">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<style scoped>
.animationmn {
  animation: flip 10s;
  animation-iteration-count: infinite;
}
</style>

<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "dashboard",
          text: "About Me",
          route: "/"
        },
        {
          icon: "keyboard",
          text: "My Resume",
          route: "/Resume"
        }
      ],

      vuejs: [
        {
          icon: "photo_camera",
          text: "Rosamaria Gelateria",
          route: "/Gelateria"
        },
        {
          icon: "photo_camera",
          text: "Roscon King",
          route: "/RosconKing"
        },

        {
          icon: "photo_camera",
          text: "Sushi Sonora",
          route: "/SushiSonora"
        }
      ],
      reactjs: [
        {
          icon: "photo_camera",
          text: "Sneakers Shop",
          route: "/Sneakers"
        }
      ],
      gocentral: [
        {
          icon: "photo_camera",
          text: "Manny Shutters",
          route: "/Mannyshutters"
        },
        {
          icon: "music_note",
          text: "Big Band San Fernando",
          route: "/BigBandSanFernando"
        }
      ],
      snackbar: false,
      submenu: false
    };
  }
};
</script>

