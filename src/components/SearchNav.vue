<script setup>
import { ref } from "vue";

let selectedIndex = ref(0);
const tabs = [];
console.log($children);
</script>
<template>
  <!-- <ul class="list-unstyled d-flex">
    <li>
      <router-link
        to="/bus"
        class="btn link-secondary px-4"
        @click="activeTab = 1"
        :class="{ active: activeTab === 1 ? 'active' : '' }"
      >
        找公車
      </router-link>
    </li>
    <li>
      <router-link
        to="/stop"
        class="btn link-secondary px-4"
        @click="activeTab = 2"
        :class="{ active: activeTab === 2 ? 'active' : '' }"
      >
        找站牌
      </router-link>
    </li>
    <li>
      <router-link
        to="/transport"
        class="btn link-secondary px-4"
        @click="activeTab = 3"
        :class="{ active: activeTab === 3 ? 'active' : '' }"
      >
        找客運
      </router-link>
    </li>
  </ul>
  <div class="d-flex flex-column">
    <router-view />
  </div> -->

  <tabs>
    <tab>bus</tab>
    <tab>stop</tab>
    <tab>transport</tab>
  </tabs>
</template>
<style lang="scss" scoped>
// a {
//   background-color: #d4f3f1;
//   &.active {
//     background-color: #000;
//   }
// }
</style>