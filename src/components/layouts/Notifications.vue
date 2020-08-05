<template>
  <b-col lg="3" class="notification">
    <div id="notification-block-1">
      <b-row>
        <div class="notification-title title">Un événement</div>
        <fa-icon
          id="calendar-icon"
          class="notification-icon"
          :icon="['fas', 'calendar-day']"
        />
      </b-row>
      <b-col cols="10" class="notification-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </b-col>
    </div>
    <div id="notification-block-2">
      <b-row>
        <div class="notification-title title">Un favori</div>
        <div class="heart-icon">
          <heart-icon id="heart-icon" class="notification-icon custom-class" />
        </div>
      </b-row>
      <b-col cols="10" class="notification-text">
        Lorem ipsum dolor sit amet consectetur.
      </b-col>
    </div>
    <div id="notification-block-3">
      <b-row>
        <div class="notification-title title">Un message</div>
        <message-reply-text-icon id="comment-icon" class="notification-icon" />
      </b-row>
      <b-col cols="10" class="notification-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </b-col>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "Notifications",
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

  #notification-block-1 {
    background-color: $brown;
  }
  #notification-block-2 {
    background-color: $orange;
  }
  #notification-block-3 {
    background-color: $green;
  }
  .notification-title {
    color: $white;
    padding: 15px 20px 15px 35px;
  }
  .notification-icon {
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
  .notification-text {
    color: $white;
    padding: 0px 5px 20px 20px;
  }
}
</style>
