<template>
  <div class="jkBG">
    <!-- <DxxmView v-if="active == Daoht[3].id"></DxxmView>
    <GywmView v-if="active == Daoht[5].id"></GywmView> -->
    <router-view></router-view>
    <div class="daoHT">
      <div class="VectorDHT">
        <div class="ttfDHT1001">上海建科房屋检测数字化协同工作管理平台</div>
        <div class="DHT10671">
          <!-- 数据概览 -->
          <div
            class="ttfDHT10671"
            :class="active == Daoht[0].id ? 'Y' : ''"
            @click="isClick(Daoht[0].id)"
            @keydown="isClick(Daoht[0].id)"
          >
            {{ Daoht[0].name }}
          </div>
          <!-- 项目管理 -->
          <div
            class="ttfDHT10671"
            :class="active == Daoht[1].id ? 'Y' : ''"
            @click="isClick(Daoht[1].id)"
            @keydown="isClick(Daoht[1].id)"
          >
            {{ Daoht[1].name }}
          </div>
          <!-- 资源管理 -->
          <div
            class="ttfDHT10671"
            :class="active == Daoht[2].id ? 'Y' : ''"
            @click="isClick(Daoht[2].id)"
            @keydown="isClick(Daoht[2].id)"
          >
            {{ Daoht[2].name }}
          </div>
          <!-- 典型项目 -->
          <div @click="isClick(Daoht[3].id)" @keydown="isClick(Daoht[3].id)">
            <router-link
              to="/Dxxm"
              class="ttfDHT10671"
              :class="active == Daoht[3].id ? 'Y' : ''"
            >
              {{ Daoht[3].name }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="DHT11005">
        <!-- 项目分布 -->
        <div
          :class="active == Daoht[4].id ? 'Vector11005Y' : 'Vector11005B'"
        ></div>
        <div
          class="ttfDHT11005B"
          :class="active == Daoht[4].id ? 'Y' : ''"
          @click="isClick(Daoht[4].id)"
          @keydown="isClick(Daoht[4].id)"
        >
          {{ Daoht[4].name }}
        </div>
      </div>
      <!-- 关于我们 -->
      <div class="DHT10694">
        <div
          :class="active == Daoht[5].id ? 'Vector10694Y' : 'Vector10694B'"
        ></div>
        <div @click="isClick(Daoht[5].id)" @keydown="isClick(Daoht[5].id)">
          <router-link
            to="/Gywm"
            class="ttfDHT10694"
            :class="active == Daoht[5].id ? 'Y' : ''"
          >
            {{ Daoht[5].name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dht from '@/assets/data/Dht.json';
// import GywmView from '@/components/GywmView.vue';
// import DxxmView from '@/components/DxxmView.vue';

export default {
  name: 'jkBG',
  // components: {
  //   GywmView,
  //   DxxmView,
  // },
  data() {
    return {
      Daoht: Dht.Daoht,
      active: -1,
    };
  },
  methods: {
    isClick(index) {
      this.active = index;
    },
  },
};
</script>

<style scoped>
.jkBG {
  background: url('~@/assets/image/bg.png');
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
@import '~@/assets/css/daoHT.css';
</style>
