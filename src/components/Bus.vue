<script setup>
import { computed, getCurrentInstance, inject } from "@vue/runtime-core";

let isActive = true;

defineProps({
  title: {
    type: String,
    default: "bus",
  },
});

const instance = getCurrentInstance();
const { tabs, active } = inject("tabsState");
const index = computed(() => {
  tabs.value.findIndex((item) => item.uid === instance.uid);
});
</script>
<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
</style>