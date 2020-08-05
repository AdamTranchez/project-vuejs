<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6">
          <fa-icon :icon="['fas', 'calendar-day']" />
          <heart-icon size="1.5x" class="custom-class" />
          <trending-up-icon size="1.5x" class="custom-class" />
          <message-reply-text-icon />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </b-col>
        <b-col sm="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <ProgressBar />
        </b-col>
      </b-row>
      <!--<b-row>
        <b-col sm="12">
          <Slider />
        </b-col>
      </b-row>-->
    </b-container>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar";
/* import Slider from "./Slider"; */

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    ProgressBar,
    /* Slider, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$color: #42b983;
h1 {
  color: $color;
}
</style>
