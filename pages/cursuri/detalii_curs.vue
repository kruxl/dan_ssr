<template>
  <main>
    <div class="places">
      <p class="top">{{ selectedUser.name }}'s Places</p>
      <h1>{{ selectedUser.module[currentModule].name }}</h1>
      <p><strong>Rating: {{ selectedUser.module[currentModule].rating }}</strong></p>
      <div class="stars"><app-star-rating /></div>

      <div class="main-img"></div>
      <p>{{ selectedUser.module[currentModule].description }}</p>
    </div>

    <aside class="sidebar">
      <h3>Other Trips</h3>
      <div v-for="user in users" class="location" :key="user">
          <div v-for="modul in user.module" :key="modul.name">
            <img :src="modul.img" :alt="modul.name" />
            <p class="top"><strong>{{ modul.name }}</strong></p>
            <p>{{ modul.description }}</p>
            <hr />
        </div>
      </div>
    </aside>
  </main>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import IconBase from '~/components/IconBase.vue'
import IconMapPin from '~/components/IconMapPin.vue'
import AppStarRating from '~/components/AppStarRating.vue'

export default {
  components: {
    IconBase,
    IconMapPin,
    AppStarRating
  },
  data() {
    return {
      currentModule: 0
    }
  },
  methods: {
    switchModule() {

    }
  },
  computed: {
    ...mapState(['page', 'users']),
    ...mapGetters(['selectedUser'])
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 45px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.location img {
  width: 70px;
  float: left;
  margin: 0 10px 10px 0;
}

p,
.stars {
  margin: 10px 0;
}

.main-img {
  background: url('/header1.jpg') center center;
  background-size: cover;
  width: 100%;
  height: 240px;
}

.top {
  margin: 30px 0 0;
}
</style>