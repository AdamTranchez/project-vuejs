<template>
  <footer>
    <div class="slogan">
      Enjoy !
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scope>
@import "../../styles/variables.scss";

footer {
  background-color: $light;
  height: 100px;
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
