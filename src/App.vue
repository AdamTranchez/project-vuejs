<template>
  <div id="app">
    <Header />
    <Main msg="Welcome to Your Vue.js App" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./styles/variables.scss";

#app {
  font-family: "Varela Round", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;
}
</style>
