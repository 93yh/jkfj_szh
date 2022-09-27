<template>
  <div class="gddtView">
    <main>
      <div class="amap-page-container">
        <!-- 地图 -->
        <el-amap
          ref="map"
          vid="amapDemo"
          :amap-manager="amapManager"
          :center="center"
          :zoom="zoom"
          :plugin="plugin"
          :events="events"
          class="amap-demo"
        >
          <!-- 标记 -->
          <el-amap-marker
            animation="AMAP_ANIMATION_BOUNCE"
            :position="marker"
          />
          <!-- 位置名称显示 -->
          <el-amap-text
            :text="xmfcName"
            :offset="[0, 30]"
            :position="marker"
          />
        </el-amap>
      </div>
    </main>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap';

const amapManager = new AMapManager();
export default {
  name: 'gddtView',
  props: {
    xmwzCenter: {
      // type: String,
      default: '',
    },
    xmfcName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      address: null,
      searchKey: '',
      amapManager,
      marker: this.xmwzCenter,
      searchOption: {
        // city: "北京", // 搜索范围
        // citylimit: true, // 限制搜索范围
        city: '',
        citylimit: false, // 不限制搜索范围搜索，比如想全国搜索
      },
      zoom: 20,
      lng: this.xmwzCenter[0],
      lat: this.xmwzCenter[1],
      center: this.xmwzCenter,
      // locate:false,
      loaded: false,
      // events: {
      //   moveend: () => {},
      //   zoomchange: () => {},
      // },
      // 一些工具插件
      plugin: [
        'Scale', // 比例尺
        {
          // 地图类型
          pName: 'MapType',
          defaultType: 0,
          events: {
            // init(o) {
            //   window.console.log(o);
            // },
          },
        },
      ],
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.amap-demo {
  width: 1863px;
  height: 871px;
}

.search-box {
  position: absolute;
  top: 25px;
  right: 120px;
}
.amap-page-container {
  position: relative;
  width: 1863px;
  height: 871px;
}

.main {
  position: relative;
  width: 1863px;
  height: 871px;
  // overflow: auto;
  background-size: 100% 100%;
}
</style>
