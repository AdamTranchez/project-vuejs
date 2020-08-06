<template>
  <b-col lg="3" class="notification">
    <div v-for="data in text" :key="data.id">
      <div class="notification-block-1">
        <b-row>
          <div class="notification-title title">{{ data.event }}</div>
          <fa-icon
            id="calendar-icon"
            class="notification-icon"
            :icon="['fas', 'calendar-day']"
          />
        </b-row>
        <b-col cols="10" class="notification-text">
          {{ data.text }}
        </b-col>
      </div>
      <div class="notification-block-2">
        <b-row>
          <div class="notification-title title">{{ data.favorite }}</div>
          <div class="heart-icon">
            <heart-icon
              id="heart-icon"
              class="notification-icon custom-class"
            />
          </div>
        </b-row>
        <b-col cols="10" class="notification-text">
          {{ data.text }}
        </b-col>
      </div>
      <div class="notification-block-3">
        <b-row>
          <div class="notification-title title">{{ data.message }}</div>
          <message-reply-text-icon
            id="comment-icon"
            class="notification-icon"
          />
        </b-row>
        <b-col cols="10" class="notification-text">
          {{ data.text }}
        </b-col>
      </div>
    </div>
  </b-col>
</template>

<script>
import textJson from "../../data/notifications.json";

export default {
  name: "Notifications",
  data() {
    return {
      text: textJson,
    };
  },
};
</script>

<style lang="scss" scope>
@import "../../styles/variables.scss";

.notification {
  position: sticky;
  top: 0px;
  @media (max-width: 800px) {
    margin: auto;
  }

  &-block-1 {
    background-color: $brown;
  }
  &-block-2 {
    background-color: $orange;
  }
  &-block-3 {
    background-color: $green;
  }
  &-title {
    color: $white;
    padding: 15px 20px 15px 35px;
  }
  &-icon {
    color: $white;
  }
  #calendar-icon {
    margin-top: 15px;
    margin-left: 60px;
    font-size: 20px;
    @media (max-width: 800px) {
      margin-left: 480px;
    }
    @media (max-width: 420px) {
      margin-left: 150px;
    }
  }
  .heart-icon {
    margin-top: 15px;
    margin-left: 100px;
    @media (max-width: 800px) {
      margin-left: 520px;
    }
    @media (max-width: 420px) {
      margin-left: 185px;
    }
    #heart-icon {
      width: 26px;
      height: 26px;
    }
  }
  #comment-icon {
    margin-top: 15px;
    margin-left: 80px;
    @media (max-width: 800px) {
      margin-left: 500px;
    }
    @media (max-width: 420px) {
      margin-left: 165px;
    }
  }
  &-text {
    color: $white;
    padding: 0px 5px 20px 20px;
  }
}
</style>
