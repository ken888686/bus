<script setup>
</script>
<template>
  <footer class="bg-gray-600">
    <div
      class="
        container-fluid container-lg
        d-flex
        flex-column flex-md-row
        align-items-md-center
        py-3
      "
    >
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo-footer.png" alt="logo" />
      </router-link>
      <div class="text-white d-flex flex-column flex-md-row pt-2 ms-md-auto">
        <span>全台公車動態時刻查詢應用服務本網站</span>
        <span>The F2E所有 Copyright©2021</span>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
span {
  color: #ced0ce;
  font-size: 14px;
  @media (max-width: 991.98px) {
    font-size: 12px;
  }
}

.bg-gray-600 {
  background-color: #4d514f;
}
</style>