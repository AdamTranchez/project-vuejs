<template>
  <div class="slider">
    <div v-for="data in text" :key="data.id">
      <div class="static-banner title">
        {{ data.static_banner }}
      </div>
      <b-carousel v-model="slide" :interval="3000" indicators>
        <b-carousel-slide img-src="./../assets/img/stormtrooper.jpeg">
        </b-carousel-slide>
        <b-carousel-slide img-src="./../assets/img/stormtrooper.jpeg">
        </b-carousel-slide>
        <b-carousel-slide img-src="./../assets/img/stormtrooper.jpeg">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import textJson from "../data/main.json";

export default {
  name: "Slider",
  data() {
    return {
      text: textJson,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";

.carousel-indicators {
  z-index: 1;
}

.static-banner {
  position: absolute;
  background: hsla(0, 0%, 0%, 0.3);
  @media (min-width: 801px) {
    width: 94%;
  }
  @media (max-width: 800px) {
    width: 96%;
  }
  @media (max-width: 420px) {
    width: 92%;
  }
  height: 100%;
  font-size: 38px;
  color: white;
  padding-top: 42%;
  text-align: center;
  z-index: 1;
}

.carousel-indicators li {
  margin-right: 12px;
  background: $light;
  opacity: 1;
  width: 24px;
  height: 5px;
  border-radius: 50%;
}

.carousel-indicators li.active {
  background: $orange;
}
</style>
