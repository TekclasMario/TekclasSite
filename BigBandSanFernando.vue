<template>
  <div class="page">
    <v-layout v-for="image in images" :key="image.landing" :src="image.landing" v-bind="binding">
      <v-flex pb-5 xs8>
        <v-card class="text-xs-center black">
          <v-img height="444" contain :src="image.landing"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card class="black">
          <v-img height="444" contain :src="image.mview"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout v-bind="binding">
      <v-spacer></v-spacer>
      <v-flex lg5>
        <v-card
          v-for="text in projtext"
          :key="text.name"
          class="text-xs-center black white--text blue pa-4 animated bandcardleft"
        >
          <h1>{{text.name}}</h1>
          <h4>{{text.projinfo}}</h4>
        </v-card>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs3 pt-2 text-xs-center>
        <div v-for="text in info" :key="text.info">
          <h2 class="white--text pt-3 pb-2">
            {{ text.visit }}
            <a :href="text.link" target="_blank">{{text.siteaddress}}</a>
          </h2>
          <h3 class="white--text pb-2">{{ text.techused}}</h3>
        </div>
        <v-btn
          v-for="link in links"
          :href="link.href"
          :key="link.icon"
          id="socmedia"
          class="mx-3 green"
          target="_blank"
          dark
          icon
        >
          <v-icon class="animated animationsp" size="24px">{{ link.icon }}</v-icon>
        </v-btn>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </div>
</template>

<style scoped>
.bandcardleft {
  animation: bounceInRight 2s;
  animation-duration: 4s;
}
</style>

<script>
export default {
  computed: {
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.smAndDown) binding.column = true;

      return binding;
    }
  },

  data: () => ({
    projtext: [
      {
        name: "Big Band San Fernando",
        projinfo:
          "Based out of Colombia, Big Band San Fernando contacted me to assist in bringing their vision of their dream website to realidty. This project was unique because they wanted to create a website they could easily update and keep up with their current events. On this project I also assisted with releasing their albums on itunes."
      }
    ],

    info: [
      {
        visit: "Visit at",
        siteaddress: "BigBandSanFernando.com",
        link: "http://BigBandSanFernando.com",
        techused: "Technologies Used"
      }
    ],
    links: [
      {
        icon: "fab fa-html5",
        href: "https://en.wikipedia.org/wiki/HTML"
      },

      {
        icon: "fab fa-css3-alt",
        href: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
      }
    ],
    images: [
      {
        landing: "/bbsflanding.jpg",
        mview: "/bbsfviews.png"
      }
    ]
  })
};
</script>


