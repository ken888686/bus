<script setup>
import Bus from "@/components/Bus.vue";
import Stop from "@/components/Stop.vue";
import Transport from "@/components/Transport.vue";
</script>
<template>
  <ul class="nav nav-pills" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link link-secondary active"
        id="bus-tab"
        data-bs-toggle="tab"
        data-bs-target="#bus"
        type="button"
        role="tab"
        aria-controls="bus"
        aria-selected="true"
      >
        找公車
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link link-secondary"
        id="stop-tab"
        data-bs-toggle="tab"
        data-bs-target="#stop"
        type="button"
        role="tab"
        aria-controls="stop"
        aria-selected="false"
      >
        找站牌
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link link-secondary"
        id="transport-tab"
        data-bs-toggle="tab"
        data-bs-target="#transport"
        type="button"
        role="tab"
        aria-controls="transport"
        aria-selected="false"
      >
        找客運
      </button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div
      class="tab-pane fade show active"
      id="bus"
      role="tabpanel"
      aria-labelledby="bus-tab"
    >
      <Bus />
    </div>
    <div
      class="tab-pane fade"
      id="stop"
      role="tabpanel"
      aria-labelledby="stop-tab"
    >
      <Stop />
    </div>
    <div
      class="tab-pane fade"
      id="transport"
      role="tabpanel"
      aria-labelledby="transport-tab"
    >
      <Transport />
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>