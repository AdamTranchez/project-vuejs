import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import MessageReplyTextIcon from "vue-material-design-icons/MessageReplyText.vue";

import { BarChartIcon } from "vue-feather-icons";
import { HeartIcon } from "vue-feather-icons";
import { XIcon } from "vue-feather-icons";
import { TrendingUpIcon } from "vue-feather-icons";

library.add(faCalendarDay);

/**
 * Font Awesome Icons
 */
Vue.component("fa-icon", FontAwesomeIcon);

/**
 * Material Design Icons
 */
Vue.component("message-reply-text-icon", MessageReplyTextIcon);

/**
 * Feather Icons
 */
Vue.component("bar-chart-icon", BarChartIcon);
Vue.component("heart-icon", HeartIcon);
Vue.component("x-icon", XIcon);
Vue.component("trending-up-icon", TrendingUpIcon);