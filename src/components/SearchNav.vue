<script setup>
</script>
<template>
  <ul class="list-unstyled d-flex">
    <li>
      <router-link to="/bus" class="btn link-secondary px-4">
        找公車
      </router-link>
    </li>
    <li>
      <router-link to="/stop" class="btn link-secondary px-4">
        找站牌
      </router-link>
    </li>
    <li>
      <router-link to="/transport" class="btn link-secondary px-4">
        找客運
      </router-link>
    </li>
  </ul>
  <div class="d-flex flex-column">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
a {
  background-color: #d4f3f1;

  &:hover,
  &:active {
    background-color: #effcf8;
  }
}
</style>