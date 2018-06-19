<template>
  <main>
    <div v-if="showCarousel">
      <carousel :per-page="1"
        ref="mycarousel"
        >
        <slide v-for="user in users" :key="user.name">
          <img :src="user.img" :alt="user.name"/>
        </slide>
        </carousel>
    </div>








    <!-- <div class="places" ref="places">
      <div v-for="place in users" :key="place.name">
        <div class="location">
          <img :src="place.img" :alt="place.name" />
          <h1>{{ place.name }}</h1>
          <p><strong>Rating: {{ place.rating }}</strong></p>
          <p>{{ place.bio }}</p>
          <nuxt-link to="cursuri/nume_curs">-> mergi la curs</nuxt-link>
        </div>
        <div  class="module">
          <div v-for="modul in place.places" :key="modul.name">
            <p>{{ modul.name }}</p>
            <p>{{ modul.description }}</p>
          </div>
        </div>
        <hr />
      </div>
    </div> -->
    <!-- <div class="mapcontain" ref="mapcontain">
      <p>
        <icon-base icon-name="mappin"><icon-map-pin /></icon-base> 
        Checked in at Honolulu location
      </p>
    </div> -->
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    IconBase,
    IconMapPin
  },
  data() {
    return {
      showCarousel: false
    }
  },
  computed: {
    ...mapState(['page', 'users']),
    ...mapGetters(['selectedUser'])
  },
   mounted() {
    this.showCarousel = true


//    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
//    mapboxgl.accessToken =
//      'pk.eyJ1Ijoic2RyYXNuZXIiLCJhIjoiY2pmZzBqZmptMjI1eTMzbWl1bGExMHppZyJ9.diPXryPOiyMuqcV4mpNOlg'
//    var map = new mapboxgl.Map({
//      container: this.$refs.mapcontain,
//      style: 'mapbox://styles/sdrasner/cjfg0watl6rkv2sllf6hepdd5'
//    })
  }
}
</script>

<style>
.mapboxgl-missing-css {
  display: none;
}
</style>

<style lang="scss" scoped>
.module {
  clear:both;
}


main {
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 120px;
}

.places {
  img {
    float: left;
    margin: 0 15px 15px 0;
  }
  p {
    margin-top: 10px;
  }
  .location {
    padding: 10px 0;
  }
}

hr {
  border-top: 1px solid #ddd;
  border-bottom: none;
  margin-top: 15px;
}

.mapcontain {
  width: 35%;
  float: right;
  height: 400px;
  p {
    margin: 10px 0;
  }
}

@media screen and (max-width: 600px) {
  .mapcontain {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
