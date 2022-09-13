<template>
  <div class="home">
    <!-- <GywmView msg="Welcome to Your Vue.js App"/> -->
    <jkBG/>
  </div>
</template>

<script>
// @ is an alias to /src
import jkBG from '@/components/bg.vue';

export default {
  name: 'HomeView',
  components: {
    jkBG,
  },
};
</script>
