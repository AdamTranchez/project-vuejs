<template>
  <div class="loading">
    <div class="percentage-number">{{ percent }}%</div>
    <div class="loading-bar">
      <div class="percentage" :style="{ width: percentage + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      percentage: 0,
    };
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    },
  },
  created() {
    var intval = setInterval(() => {
      if (this.percentage < 100) this.percentage += 0.1;
      else clearInterval(intval);
    }, 100);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";

.percentage-number {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}

.loading-bar {
  background-color: $lightGrey;
  position: relative;
  height: 20px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
    0 1px 0 #fff;

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: $orange;
    background-size: 30px 30px;
    background-image: linear-gradient(
      135deg,
      rgba($color: #fff, $alpha: 0.15) 25%,
      transparent 25%,
      transparent 50%,
      rgba($color: #fff, $alpha: 0.15) 50%,
      rgba($color: #fff, $alpha: 0.15) 75%,
      transparent 75%,
      transparent
    );
    animation: animate-stripes 3s linear infinite;
  }
}

@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 60px 0;
  }
}
</style>
