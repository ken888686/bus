<script setup>
import SearchNav from "../components/SearchNav.vue";
</script>
<template>
  <div class="bg-main h-100">
    <SearchNav />
  </div>
</template>
<style lang="scss" scoped>
.bg-main {
  background: url(@/assets/img/shape-1.svg), url(@/assets/img/shape-2.svg),
    linear-gradient(143.04deg, #70ebb0 13.42%, #40caca 84.3%);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: bottom, bottom, center;
  background-size: 100%, 100%, 100%;
}
</style>