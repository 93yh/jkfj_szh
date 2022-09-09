<template>
  <div class="gywm">
    <div class="Frame710 F71001">
      <div
        class="Frame11035 F1103501"
        :style="`
          background-image: url( ${require('@/assets/image/'+arr6.imgPath)} )`"
      ></div>
      <div class="Frame11035 F1103502">
        <div class="ttf3">
          <li class="L01" v-for="(arr,index) in arr6.details" :key="index"
              @click="arrClick(arr)"
              @keydown="arrClick(arr)">
            {{ arr }}
          </li>
        </div>
      </div>
    </div>
    <div class="Frame710 F71002">
      <div class="ttf2 ttf201">{{arr0.name}}</div>
      <div class="Frame11035 F1103503">
        <div class="ttf3 ttf301">
          <li class="L02" v-for="(arr,index) in arr0.parm" :key="index"
              @click="arrClick(arr)"
              @keydown="arrClick(arr)">
            {{ arr.parmName }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf202">{{arr1.name}}</div>
      <div class="Frame11035 F1103506">
        <div class="ttf3 ttf302">
          <li class="L02" v-for="(arr,index) in arr1.parm" :key="index">
            {{ arr.parmName }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf203">{{arr2.name}}</div>
      <div class="Frame11035 F1103507">
        <div class="ttf3 ttf303">
          <li class="L02" v-for="(arr,index) in arr2.parm" :key="index"
              @click="arrClick(arr)"
              @keydown="arrClick(arr)">
            {{ arr.parmName }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf204">{{arr3.name}}</div>
      <div class="Frame11035 F1103508">
        <div class="ttf3 ttf304">
          <li class="L02" v-for="(arr,index) in arr3.parm" :key="index"
              @click="arrClick(arr)"
              @keydown="arrClick(arr)">
            {{ arr.parmName }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf205">{{arr4.name}}</div>
      <div class="Frame11035 F1103509">
        <div class="ttf3 ttf305">
          <li
            class="L02" v-for="(arr,index) in arr4.parm" :key="index"
            @click="arrClick(arr)"
            @keydown="arrClick(arr)"
          >
            {{ arr.parmName }}
          </li>
        </div>
      </div>
    </div>
    <div class="Frame710 F71003">
      <div class="Vector8 ttf1 ttf101">科研中心</div>
      <div class="Frame10801 F1080101">
        <div class="ttf1 ttf1001">
          负责人：冷予冰<br />电话：13402081579<br />邮箱：leng_yb@163.com
        </div>
      </div>

      <div class="Vector8 ttf1 ttf102">房屋鉴定</div>
      <div class="Frame10801 F1080102">
        <div class="ttf1 ttf1001">
          负责人：石昊<br />电话：13916243612<br />邮箱：18247412@qq.com
        </div>
      </div>

      <div class="Vector8 ttf1 ttf103">工程检测</div>
      <div class="Frame10801 F1080103">
        <div class="ttf1 ttf1001">
          负责人：曹东升<br />电话：13046601175<br />邮箱：22361760@qq.com
        </div>
      </div>

      <div class="Vector8 ttf1 ttf104">建筑结构数字化</div>
      <div class="Frame10801 F1080104">
        <div class="ttf1 ttf1001">
          负责人：王煜成<br />电话：17621682274<br />邮箱：wychpsz@126.com
        </div>
      </div>

      <div class="Vector8 ttf1 ttf105">装配式建筑</div>
      <div class="Frame10801 F1080105">
        <div class="ttf1 ttf1002">
          负责人：陈玲珠<br />电话：13764953929<br />邮箱：20040392chen@163.com
        </div>
      </div>

      <div class="Vector8 ttf1 ttf106">预应力工程</div>
      <div class="Frame10801 F1080106">
        <div class="ttf1 ttf1001">
          负责人：张富文<br />电话：13774262868<br />邮箱：hangfuwen@sribs.com
        </div>
      </div>

      <div class="Frame11035 F1103504">
        <img src="@/assets/image/gfwz.png" width="240px" alt="官方网站" />
        <div class="ttf1 ttf1003">官方网站</div>
      </div>
      <div class="Frame11035 F1103505">
        <img src="@/assets/image/wxgzh.png" width="234px" alt="微信公众号" />
        <div class="ttf1 ttf1004">微信公众号</div>
      </div>
    </div>
  </div>
</template>

<script>
import gywm from '@/assets/data/gywm.json';

export default {
  data() {
    return {
      arr0: gywm.Business[0],
      arr1: gywm.Business[1],
      arr2: gywm.Business[2],
      arr3: gywm.Business[3],
      arr4: gywm.Business[4],
      arr6: gywm.Business[0].parm[0],
    };
  },
  methods: {
    arrClick(arr) {
      this.arr6 = arr;
      return this.arr6;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gywm {
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
