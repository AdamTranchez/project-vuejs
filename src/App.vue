<template>
  <div id="app">
    <Header />
    <b-container class="content bv-example-row">
      <b-row>
        <Notifications />
        <Main />
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Notifications from "./components/layouts/Notifications.vue";
import Main from "./components/Main.vue";
import Footer from "./components/layouts/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Notifications,
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
  color: $dark;
  font-size: $fontSize;

  .content {
    padding-top: 70px;
    padding-bottom: 50px;
  }
}
</style>
