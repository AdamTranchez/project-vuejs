<template>
  <b-col lg="8" offset-lg="1" class="main">
    <div v-for="data in text" :key="data.id">
      <p class="main-title title h3">{{ data.title }}</p>
      <p class="introduction">{{ data.introduction }}</p>
      <b-row class="main-blocks">
        <b-col lg="4" class="diagrams-block">
          <div class="diagram progressbar-block shadow">
            <p class="diagram-title title h6">{{ data.progressBar_1 }}</p>
            <ProgressBar />
          </div>
          <div class="diagram progressbar-block shadow">
            <p class="diagram-title title h6">{{ data.progressBar_2 }}</p>
            <ProgressBar />
          </div>
          <div class="diagram progressbar-block shadow">
            <p class="diagram-title title h6">{{ data.progressBar_3 }}</p>
            <ProgressBar />
          </div>
        </b-col>
        <b-col lg="8" class="image-block">
          <Slider />
        </b-col>
      </b-row>
      <p class="conclusion">
        {{ data.conclusion }}
      </p>
    </div>
  </b-col>
</template>

<script>
import textJson from "../data/main.json";
import ProgressBar from "./ProgressBar";
import Slider from "./Slider";

export default {
  name: "Main",
  components: {
    ProgressBar,
    Slider,
  },
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

.main {
  background-color: white;
  &-title {
    color: $dark;
    font-size: 26px;
  }
  &-blocks {
    margin-bottom: 40px;
    .diagrams-block {
      background-color: $white;
      .diagram {
        padding: 1.1rem;
        &-title {
          color: $dark;
          text-align: center;
          font-size: 16px;
        }
      }
      .progressbar-block {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
