<template>
  <div class="gywmDept">
    <div v-for="(item, index) in Depts" :key="index">
      <div class="F10808">
        <div class='Vector8 ttf4'>
          {{ item.name }}
        </div>
        <div class='Frame10801'>
          <div :class="index=='4'?'ttf1 ttf1002':'ttf1 ttf1001'">
            负责人：{{item.person}}<br />电话：{{item.phone}}<br />邮箱：{{item.email}}
          </div>
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
.gywmDept{
  /* 部门 */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24.93px;
  position: absolute;
  right: 844.93px;
  left: 66px;
  top: 81px;
  bottom: 81px;

}
@import "~@/assets/css/Gywm.css";
</style>
