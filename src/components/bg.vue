<template>
  <div class="jkBG">
    <div class="daoHT">
      <div class="VectorDHT">
        <div class="ttfDHT1001">上海建科房屋检测数字化协同工作管理平台</div>
        <div class="DHT10671">
          <div class="ttfDHT10671">{{ Daoht[0].name }}</div>
          <div class="ttfDHT10671">{{ Daoht[1].name }}</div>
          <div class="ttfDHT10671">{{ Daoht[2].name }}</div>
          <div class="ttfDHT10671">{{ Daoht[3].name }}</div>
        </div>
      </div>
      <div class="DHT11005">
        <div class="Vector11005B"></div>
        <div class="ttfDHT11005B">{{ Daoht[4].name }}</div>
      </div>
      <div class="DHT10694">
        <div class="Vector10694Y"></div>
        <div class="ttfDHT10694Y">{{ Daoht[5].name }}</div>
      </div>
    </div>
    <GywmView></GywmView>
  </div>
</template>

<script>
import Dht from '@/assets/data/Dht.json';
import GywmView from '@/components/GywmView.vue';

export default {
  name: 'jkBG',
  components: {
    GywmView,
  },
  data() {
    return {
      Daoht: Dht.Daoht,
    };
  },
};
</script>

<style scoped>
.jkBG {
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
.daoHT {
  /* 导航条 */
  position: absolute;
  width: 3844px;
  height: 202px;
  left: 0px;
  top: 48px;
}
@import "~@/assets/css/daoHT.css";
</style>
