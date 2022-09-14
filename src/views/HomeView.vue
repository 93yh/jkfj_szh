<template>
  <div class="home">
    <!-- <GywmView msg="Welcome to Your Vue.js App"/> -->
    <jkBG/>
  </div>
</template>

<script>
// @ is an alias to /src
import jkBG from '@/components/jkBG.vue';

export default {
  name: 'HomeView',
  components: {
    jkBG,
  },
};
</script>
