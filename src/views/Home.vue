<template>
  <div class="d-flex flex-column vh-100">
    <Header />
    <div class="flex-grow-1">
      <!-- <Map /> -->
      <SearchForm />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Map from '@/components/Map.vue';
import SearchForm from '@/components/SearchForm.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Map,
    SearchForm,
    Footer,
  },
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
