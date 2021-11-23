<template>
  <div class="form d-flex flex-column py-4 ps-4">
    <form class="d-flex bg-primary p-3">
      <input
        class="form-control me-2 bg-light"
        type="search"
        placeholder="搜尋公車路線或站牌"
        aria-label="Search"
        v-model="keyword"
      />
      <button class="btn btn-light text-nowrap" type="button">篩選</button>
    </form>
    <div class="flex-grow-1 text-center border">
      <span v-if="searchResult.length === 0">輸入公車路線或站牌找看看吧！</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: '',
      searchResult: [],
    };
  },
  methods: {
    search() {
      console.log(this.keyword);
      this.keyword = '';
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.form {
  width: 400px;
  height: 100%;
}
</style>
