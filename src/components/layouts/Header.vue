<template>
  <header>
    <div class="wrapper">
      <nav class="nav-goweb navbar navbar-expand-lg">
        <div class="container">
          <div class="logo-navbar">
            <fa-icon :icon="['fas', 'rocket']" size="3x" />
          </div>
          <div class="menu">
            <bar-chart-icon id="menu-icon" class="custom-class"></bar-chart-icon>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scope>
@import "../../styles/variables.scss";

header {
  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;

    .nav-goweb {
      background-color: $light;
      height: 100px;
      width: 100%;

      .logo-navbar {
        color: $red;
      }

      #menu-icon {
        color: $grey;
        transform: rotate(-90deg);
        width: 46px;
        height: 46px;
        stroke-width: 1.5px;
      }
    }
  }
}
</style>
