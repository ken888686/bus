<template>
  <nav class="navbar navbar-expand-lg nav-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">找公車</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">找客運</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">找單車</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">轉乘資訊</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Header',
  components: {},
  data() {
    return {
      testStr: '測試',
    };
  },
  methods: {
    sayHi(str) {
      console.log('Hi', str);
    },
  },
  mounted() {
    // console.log('mounted');
  },
};
</script>

<style lang="scss" scoped></style>
