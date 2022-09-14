<template>
  <div class="gywmBusiness">
    <div class='Frame710 F71001'>
      <div
        class='Frame11035 F1103501'
        :style="`
          background-image: url( ${require('@/assets/image/' + detail.imgPath)} )`"
      ></div>
      <div class='Frame11035 F1103502'>
        <div class='ttf5 ttf501'>
          <li
            class='L01'
            v-for='(arr, index) in detail.details'
            :key='index'
          >
            {{ arr }}
          </li>
        </div>
      </div>
    </div>
    <div class='Frame710 F71002'>
      <div v-for="(item, index) in Business" :key="index">
        <div :class="'ttf2 ttf20'+(index+1)">{{ item.name }}</div>
        <div :class="'Frame11035 F110350'+(index+5)">
          <div class='ttf3 ttf301'>
            <li
              class='L02'
              v-for='(arr, index) in item.parm'
              :key='index'
              @click='arrClick(arr)'
              @keydown='arrClick(arr)'
            >
              {{ arr.parmName }}
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gywm from '@/assets/data/gywm.json';

export default {
  name: 'gywmBusiness',
  data() {
    return {
      Business: gywm.Business,
      detail: gywm.Business[0].parm[0],
    };
  },
  methods: {
    arrClick(arr) {
      this.detail = arr;
      return this.detail;
    },
  },
};
</script>

<style scoped>
@import "~@/assets/css/Gywm.css";
</style>
