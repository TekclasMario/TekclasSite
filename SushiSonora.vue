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
          class="text-xs-center black white--text pa-3 orange accent-2 animated sushicardleft"
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
          class="mx-3 deep-purple darken-1"
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
.sushicardleft {
  animation: rollIn 2s;
  animation-duration: 3s;
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
        name: "Sushi Sonora (Proposal Project)",
        projinfo:
          "This is a proposal project for Sushi Sonora that will implement a multi lingual option with the addioton of a social media carousel, grub hub active icons and click to call option. In addition, the technologies used in this proposed site were chosen with the grownth of the business in mind. In the future online ordering and a back end connection can be easily implemted using Nuxt JS, Laravel and MySQL."
      }
    ],

    info: [
      {
        visit: "Visit at",
        siteaddress: "sushisonora.tekclas.com",
        link: "http://sushisonora.tekclas.com",
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
      },
      {
        icon: "fab fa-npm",
        href: "https://en.wikipedia.org/wiki/Npm_(software)"
      },

      {
        icon: "fab fa-vuejs",
        href: "https://vuejs.org/"
      }
    ],
    images: [
      {
        landing: "/sushisonora.png",
        mview: "/sushiviews.png"
      }
    ]
  })
};
</script>

