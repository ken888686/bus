<template>
  <div class="d-flex flex-column vh-100">
    <Header />
    <div class="flex-grow-1">s</div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: { Header, Footer },
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
