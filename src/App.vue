<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SearchNav from "@/components/SearchNav.vue";
</script>

<template>
  <div class="d-flex flex-column vh-100">
    <Header />
    <div class="flex-grow-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style>
</style>
