<template>
  <header>
    <div class="wrapper">
      <b-navbar class="nav">
        <b-container>
          <div class="logo-navbar">
            <fa-icon id="rocket-icon" :icon="['fas', 'rocket']" />
          </div>
          <div class="menu" @click="showNav">
            <bar-chart-icon id="menu-icon" class="custom-class" />
          </div>
        </b-container>
      </b-navbar>

      <!-- Sidebar -->
      <div class="sidebar" :class="{ show: showSidebar }">
        <div class="sidebar-content" v-show="showLink">
          <div class="sidebar-close" @click="showNav">
            <x-icon size="1.5x" class="cross custom-class" />
          </div>
          <div class="sidebar-text">
            <div class="sidebar-list">
              <div class="title sidebar-title h3">One link</div>
              <div class="sidebar-link"><a href="#">Link lorem 1</a></div>
              <div class="sidebar-link"><a href="#">Link ipsum 2</a></div>
            </div>
            <div class="sidebar-list">
              <div class="title sidebar-title h3">Two links</div>
            </div>
            <div class="sidebar-list">
              <div class="title sidebar-title h3">Three links</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      showSidebar: false,
      showLink: false,
    };
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        this.showSidebar = false;
      } else {
        this.showSidebar = true;
        this.showLink = true;
      }
    },
  },
};
</script>

<style lang="scss" scope>
@import "../../styles/variables.scss";

header {
  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;

    .nav {
      background-color: $light;
      height: 100px;
      width: 100%;

      .logo-navbar {
        color: $orange;
        #rocket-icon {
          font-size: 48px;
        }
      }

      #menu-icon {
        color: $grey;
        transform: rotate(-90deg);
        width: 46px;
        height: 46px;
        stroke-width: 1.5px;
      }
    }

    .show {
      width: 50%;
    }
    .sidebar {
      position: fixed;
      right: 0;
      opacity: 0.75;
      background: black;
      transition: 0.5s;
      height: 100vh;
      z-index: 1;
      color: $white;
      .sidebar-close {
        padding: 30px 30px 0 0;
        .cross {
          float: right;
          width: 32px;
          height: 32px;
        }
      }
      .sidebar-text {
        padding: 160px 0 0 80px;
        .sidebar-list {
          .sidebar-title {
            padding-top: 10px;
            font-style: italic;
          }
          .sidebar-link {
            font-family: "Semi-bold";
            padding: 10px 0 5px 0;
            a {
              color: $grey;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
