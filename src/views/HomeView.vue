<template>
  <div class="home">
    <!-- <GywmView msg="Welcome to Your Vue.js App"/> -->
    <GywmView/>
  </div>
</template>

<script>
// @ is an alias to /src
import GywmView from '@/components/GywmView.vue';

export default {
  name: 'HomeView',
  components: {
    GywmView,
  },
};
</script>
