<template>
  <div class="DxxmView">
    <div>
      <!-- 工程概况 -->
      <div class="Frame710 F71004">
        <div class="ttf7 ttf701">工程概况</div>
        <div class="Rectangle67101"></div>
        <div class="gcgk01">
          <div class="ttf3 ttf303">{{ xm[xmActive].gcgk }}</div>
          <div class="ttf8 ttf801">
            项目时间：<span class="W">{{ xm[xmActive].xmTime }}</span>
          </div>
          <div class="ttf8 ttf802">
            项目面积：<span class="W">{{ xm[xmActive].xmArea }}</span>
          </div>
          <div class="ttf8 ttf803">
            委托单位：<span class="W">{{ xm[xmActive].wtdw }}</span>
          </div>
        </div>
      </div>
      <!-- 项目风采 -->
      <div class="Frame710 F71005">
        <div class="ttf7 ttf702">项目风采</div>
        <div class="Rectangle67102"></div>
        <div class="F11086">
          <div v-for="(item, index) in xmfc" :key="index">
            <div
              class="F10657"
              :class="xmfcActive == item.abbr ? 'B' : ''"
              @click="xmfcClick(item.abbr, xmActive)"
              @keydown="xmfcClick(item.abbr, xmActive)"
            >
              <div class="ttf9">{{ item.xmfcName }}</div>
            </div>
          </div>
        </div>
        <div class="F11084">
          <iframe
            :src="xmfcdetail"
            class="F1108401"
            title="项目风采"
            v-if="this.xmfcActive === 'sjmx' || this.xmfcActive === 'qjmx'"
          ></iframe>

          <div class="F1108402" v-if="this.xmfcActive === 'chtz'"></div>
        </div>
      </div>
      <!-- 照片栏 -->
      <div class="Frame710 F71006">
        <swiper
          class="swiper02"
          :options="swiperOption02"
          ref="swiperOption02"
        >
          <swiper-slide
            class="swiper-slide02"
            v-for="(item, index) in xm[xmActive].imagesPath"
            :key="index"
            :id="item.id"
            :style="`background-image: url( ${require('@/assets/image/' +
              item)} )`"
          >
          </swiper-slide>
        </swiper>
      </div>
      <!-- 项目栏 -->
      <div class="Frame710 F71007">
        <div class="outSwiperBox">
          <swiper
            class="swiper01 inSwiperBox"
            :options="swiperOption01"
            ref="swiperOption01"
          >
            <swiper-slide
              class="swiper-slide01"
              v-for="(item, index) in xm"
              :key="index"
              :class="xmActive == item.id ? 'BB' : ''"
              :id="item.id"
              :style="`background-image: url( ${require('@/assets/image/' +
                item.imgPath)} )`"
            >
              <div class="ttf10">
                {{ item.xmName }}
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dxxm from '@/assets/data/dxxm.json';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

let vm = null;
export default {
  name: 'DxxmView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      xm: dxxm.xm,
      xmfc: dxxm.xmfc,
      xmfcActive: 'sjmx',
      xmfcdetail: dxxm.xm[0].sjmx,
      xmActive: 0,
      swiperOption01: {
        slidesPerView: 4,
        spaceBetween: 22,
        slidesPerGroup: 1,
        loop: true,
        observer: true,
        observeParents: true,
        on: {
          click(sw) {
            vm.xmActive = sw.target.id; // 这里this是swiper的实例
            vm.xmfcdetail = vm.xm[sw.target.id].sjmx;
            vm.xmfcActive = 'sjmx';
            this.autoplay.stop();
          },
          doubleTap() {
            this.autoplay.start();
          },
        },
        autoplay: {
          // 自动轮播
          delay: 3000,
          // stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, // 同上
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   // progressbarOpposite: true, // 使进度条分页器与Swiper的direction参数相反
        //   // bulletElement : 'li', // 设定分页器指示器（小点）的HTML标签。
        //   dynamicBullets: true, // 动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
        //   dynamicMainBullets: 20, // 动态分页器的主指示点的数量
        //   hideOnClick: true, // 默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true, // 滚动条是否自动隐藏。默认：false，不会自动隐藏。
        //   draggable: true, // 该参数设置为true时允许拖动滚动条。
        //   snapOnRelease: true, // 如果设置为false，释放滚动条时slide不会自动贴合。
        //   dragSize: 20, // 设置滚动条指示的尺寸。默认'auto': 自动，或者设置num(px)。
        // },
      },
      swiperOption02: {
        slidesPerView: 3,
        spaceBetween: 46,
        slidesPerGroup: 1,
        loop: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        on: {
          click() {
            // this.slideTo(sw2.target.id, 0);
            this.autoplay.stop();
            // window.console.log(this);
          },
          doubleTap() {
            this.autoplay.start();
          },
        },
        autoplay: {
          // 自动轮播
          delay: 1500,
          // stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        mousewheel: true, // 开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, // 同上
      },
    };
  },
  created() {
    vm = this;
    // window.console.log(vm);
  },
  methods: {
    xmfcClick(abbr, id) {
      this.xmfcActive = abbr;
      this.xmfcdetail = this.xm[id][abbr];
    },
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.DxxmView {
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
@import '~@/assets/css/Gywm.css';
</style>
