<template>
  <div class='DxxmView'>
    <div>
      <!-- 工程概况 -->
      <div class="Frame710 F71004">
        <div class="ttf7 ttf701">工程概况</div>
        <div class="Rectangle67101"></div>
        <div class="gcgk01">
          <div class="ttf3 ttf303">{{xm[1].gcgk}}</div>
          <div class="ttf8 ttf801">项目时间：<span class="W">{{xm[1].xmTime}}</span></div>
          <div class="ttf8 ttf802">项目面积：<span class="W">{{xm[1].xmArea}}</span></div>
          <div class="ttf8 ttf803">委托单位：<span class="W">{{xm[1].wtdw}}</span></div>
        </div>
      </div>
      <!-- 项目风采 -->
      <div class="Frame710 F71005">
        <div class="ttf7 ttf702">项目风采</div>
        <div class="Rectangle67102"></div>
        <div class="F11086">
          <div v-for="(item,index) in xmfc" :key="index">
            <div class="F10657"
                :class="xmfcActive == item.abbr ? 'B' : ''"
                @click="xmfcClick(item.abbr)"
                @keydown="xmfcClick(item.abbr)"
            >
              <div class="ttf9">{{item.xmfcName}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 照片栏 -->
      <div class="Frame710 F71006"></div>
      <!-- 项目栏 -->
      <div class="Frame710 F71007"></div>
    </div>
  </div>
</template>

<script>
import dxxm from '@/assets/data/dxxm.json';

export default {
  name: 'DxxmView',
  data() {
    return {
      xm: dxxm.xm,
      xmfc: dxxm.xmfc,
      xmfcActive: -1,
      // wd:dxxm.xm[1].sjmx,
    };
  },
  methods: {
    xmfcClick(abbr) {
      this.xmfcActive = abbr;
      // this.wd = arr;
      // return this.detail;
    },
  },
  // components: {
  //   gywmDept,
  //   gywmBusiness,
  // },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.DxxmView {
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
}
@import "~@/assets/css/Gywm.css";
</style>
