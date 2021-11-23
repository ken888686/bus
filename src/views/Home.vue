<template>
  <Header />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: { Header },
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
