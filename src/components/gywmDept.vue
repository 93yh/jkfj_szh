<template>
  <div class="gywmDept">
    <div v-for="(item, index) in Depts" :key="index">
      <div :class="'Vector8 ttf1 ttf10'+(index+1)">
        {{ item.name }}
      </div>
      <div :class="'Frame10801 F108010'+(index+1)">
        <div :class="[index=='4'?'ttf1 ttf1002':'ttf1 ttf1001']">
          负责人：{{item.person}}<br />电话：{{item.phone}}<br />邮箱：{{item.email}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gywm from '@/assets/data/gywm.json';

export default {
  name: 'gywmDept',
  data() {
    return {
      Depts: gywm.Dept,
    };
  },
};
</script>

<style scoped>
@import "~@/assets/css/Gywm.css";
</style>
