<template>
  <footer>
    <div class="slogan">
      <div v-for="data in text" :key="data.id">
        {{ data.slogan }}
      </div>
    </div>
  </footer>
</template>

<script>
import textJson from "../../data/footer.json";

export default {
  name: "Footer",
  data() {
    return {
      text: textJson,
    };
  },
};
</script>

<style lang="scss" scope>
@import "../../styles/variables.scss";

footer {
  position: fixed;
  bottom: 0;
  background-color: $light;
  height: 100px;
  width: 100%;
  z-index: 20;
  .slogan {
    font-size: 28px;
    font-style: italic;
    font-weight: bold;
    color: $orange;
    padding-top: 30px;
    text-align: center;
  }
}
</style>
