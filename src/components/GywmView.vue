<template>
  <div class='GywmView'>
    <!-- <daoHT></daoHT> -->
    <gywmBusiness></gywmBusiness>
    <div class='Frame710 F71003'>
      <gywmDept></gywmDept>
      <div class='Frame11035 F1103503'>
        <img src='@/assets/image/gfwz.png' width='240px' alt='官方网站' />
        <div class='ttf1 ttf1003'>官方网站</div>
      </div>
      <div class='Frame11035 F1103504'>
        <img src='@/assets/image/wxgzh.png' width='234px' alt='微信公众号' />
        <div class='ttf1 ttf1004'>微信公众号</div>
      </div>
    </div>
  </div>
</template>

<script>
import gywmDept from '@/components/gywmDept.vue';
import gywmBusiness from '@/components/gywmBusiness.vue';
// import daoHT from '@/components/daoHT.vue';

export default {
  name: 'GywmView',
  components: {
    gywmDept,
    gywmBusiness,
    // daoHT,
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.GywmView {
  background: url("~@/assets/image/bg.png");
  /* 3840x2160_07_关于我们 */
  /* position: relative;
    width: 3840px;
    height: 2160px;
    background-size:100% 100%; */
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
};
@import "~@/assets/css/Gywm.css";
</style>
