<template>
  <b-col lg="8" offset-lg="1" class="main">
    <p class="main-title title h3">Un petit titre</p>
    <p class="introduction">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi itaque,
      dolores saepe iusto corporis eveniet sed necessitatibus veritatis
      repellat. Quam facilis ipsum reprehenderit reiciendis culpa ex natus illum
      fuga sapiente.
    </p>
    <b-row class="main-blocks">
      <b-col lg="4" class="diagrams-block">
        <div class="diagram progressbar-block shadow">
          <p class="diagram-title title h6">Une progress bar cute</p>
          <ProgressBar />
          <div class="parent-label-center">
            <div class="label-center trending-icon">
              <trending-up-icon id="trending-icon" class="custom-class" />
            </div>
          </div>
        </div>
        <div class="diagram donut-block shadow">
          <p class="diagram-title title h6">Un donut méga cool</p>
          <Donut />
        </div>
      </b-col>
      <b-col lg="8" class="image-block">
        <div class="main-carousel">
          <div class="carousel-cell">
            <div class="static-banner title">
              May the 4th <br />
              be with u
            </div>
            <img src="../assets/img/stormtrooper.jpeg" />
          </div>
          <div class="carousel-cell"></div>
          <div class="carousel-cell"></div>
        </div>
      </b-col>
    </b-row>
    <p class="conclusion">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi itaque,
      dolores saepe iusto corporis eveniet sed necessitatibus veritatis
      repellat. Quam facilis ipsum reprehenderit reiciendis culpa ex natus illum
      fuga sapiente. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Totam incidunt pariatur ducimus fuga ex nihil voluptatibus ad, earum,
      quisquam assumenda impedit aut magni mollitia nemo magnam, suscipit
      temporibus labore ut.
    </p>
  </b-col>
</template>

<script>
import ProgressBar from "./ProgressBar";
import Donut from "./Donut";
/* import Slider from "./Slider"; */

export default {
  name: "Main",
  components: {
    ProgressBar,
    Donut,
    /* Slider, */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../styles/variables.scss";

.main {
  background-color: white;
  .main-title {
    color: $dark;
    font-size: 26px;
  }
  .main-blocks {
    margin-bottom: 40px;
    .diagrams-block {
      background-color: $white;
      .diagram {
        padding: 1.1rem;
      }
      .diagram-title {
        color: $dark;
        text-align: center;
        font-size: 16px;
      }
      .progressbar-block {
        margin-bottom: 30px;
        max-height: 200px;
        padding-bottom: 0;
        .parent-label-center {
          @media (max-width: 800px) {
            margin-left: 35%;
          }
          @media (max-width: 420px) {
            margin-left: 15%;
          }
          display: flex;
          .trending-icon {
            #trending-icon {
              margin-top: 21px;
              width: 32px;
              height: 32px;
              position: absolute;
              margin-left: 17px;
            }
          }
        }
      }

      .donut-block {
        margin-bottom: 30px;
      }
    }
    .image-block {
      .static-banner {
        position: absolute;
        background: hsla(0, 0%, 0%, 0.3);
        width: 100%;
        height: 100%;
        font-size: 38px;
        color: white;
        padding-top: 42%;
        text-align: center;
      }
      .flickity-page-dots {
        bottom: 28px;
        .dot {
          background: $light;
          opacity: 1;
          width: 24px;
          height: 24px;
        }
        .dot.is-selected {
          background: $orange;
        }
      }
      @media (min-width: 801px) {
        .carousel-cell img {
          height: 512px;
          width: 476px;
        }
      }
      @media (max-width: 800px) {
        .carousel-cell img {
          height: 512px;
          width: 476px;
        }
      }
      @media (max-width: 420px) {
        .carousel-cell img {
          height: 100%;
          width: 100%;
        }
      }
    }
  }
}
</style>
