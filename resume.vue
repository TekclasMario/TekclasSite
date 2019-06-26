<template>
  <v-container class="page">
    <v-carousel class height="750" hide-delimiters>
      <v-carousel-item
        contain
        aspect-ratio="1.4"
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade"
        transition="fade"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<style lang="stylus">
.v-carousel__prev {
  left: 217px !important;
}

.v-carousel__next {
  right: 222px !important;
}

#example-custom-transition {
  .fade {
    &-enter-active, &-leave-active, &-leave-to {
      transition: 20s ease-out;
      position: absolute;
      top: 0;
      left: 0;
    }

    &-enter, &-leave, &-leave-to {
      opacity: 0;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "/resumeimgs/respg1.png"
        },
        {
          src: "/resumeimgs/respg2.png"
        },
        {
          src: "/resumeimgs/respg3.png"
        }
      ]
    };
  }
};
</script>
