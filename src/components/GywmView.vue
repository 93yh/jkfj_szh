<template>
  <div class="gywm">
    <div
      class="Frame710 Frame71001"
    >
      <div
        class="Frame11035"
        :style="`
          width: 1197px;
          height: 478px;
          left: 76px;
          top: 74px;
          background-image: url( ${require('../assets/image/image105.png')} )`"
      ></div>
      <div
        class="Frame11035"
        style="
          position: absolute;
          height: 452px;
          left: 76px;
          right: 102px;
          top: 625px;
        "
      >
        <div class="ttf3">
          <li
            style="margin-bottom: 20px; padding-left: 46px"
            v-for="arr in arr6"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
    </div>
    <div
      class="Frame710"
      style="width: 2198px; height: 1162px; left: 1557px; top: 308px"
    >
      <div class="ttf2" style="left: 107px; top: 75px">房屋质量检测鉴定</div>
      <div
        class="Frame11035"
        style="width: 625px; height: 892px; left: 107px; top: 165px"
      >
        <div
          class="ttf3"
          style="height: 892px; left: 0px; right: 0px; top: 0px"
        >
          <li
            style="margin-top: 0px; margin-bottom: 20px"
            v-for="arr in arr1"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2" style="left: 854px; top: 75px">
        建筑结构健康监测与数字化服务
      </div>
      <div
        class="Frame11035"
        style="width: 569px; height: 284px; left: 854px; top: 165px"
      >
        <div
          class="ttf3"
          style="height: 284px; left: 0px; right: 0px; top: 0px"
        >
          <li
            style="margin-top: 0px; margin-bottom: 20px"
            v-for="arr in arr2"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2" style="left: 854px; top: 565px">
        结构性能测试与分析咨询
      </div>
      <div
        class="Frame11035"
        style="width: 429px; height: 360px; left: 854px; top: 655px"
      >
        <div
          class="ttf3"
          style="height: 360px; left: 0px; right: 0px; top: 0px"
        >
          <li
            style="margin-top: 0px; margin-bottom: 20px"
            v-for="arr in arr3"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2" style="left: 1569px; top: 75px">
        装配式建筑检测评估与质量管控
      </div>
      <div
        class="Frame11035"
        style="width: 535px; height: 535px; left: 1570px; top: 165px"
      >
        <div
          class="ttf3"
          style="height: 360px; left: 0px; right: 0px; top: 0px"
        >
          <li
            style="margin-top: 0px; margin-bottom: 20px"
            v-for="arr in arr4"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2" style="left: 1569px; top: 801px">预应力工程</div>
      <div
        class="Frame11035"
        style="width: 429px; height: 132px; left: 1569px; top: 891px"
      >
        <div
          class="ttf3"
          style="height: 132px; left: 0px; right: 0px; top: 0px"
        >
          <li
            style="margin-top: 0px; margin-bottom: 20px"
            v-for="(item, index) in arr5"
            :key="index"
            @click="arrClick(item)"
            @keydown="arrClick(item)"
          >
            {{ item }}
          </li>
        </div>
      </div>
    </div>
    <div
      class="Frame710"
      style="width: 3646px; height: 512px; left: 109px; top: 1560px"
    >
      <div
        class="Vector8 ttf1"
        style="
          left: 67.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        科研中心
      </div>
      <div class="Frame10801" style="left: 68.43px; top: 158.78px">
        <div class="ttf1" style="left: 11.55%; top: 12.95%; right: 17.75%">
          负责人：冷予冰<br />电话：13402081579<br />邮箱：leng_yb@163.com
        </div>
      </div>

      <div
        class="Vector8 ttf1"
        style="
          left: 527.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        房屋鉴定
      </div>
      <div class="Frame10801" style="left: 528.43px; top: 158.78px">
        <div class="ttf1" style="left: 11.55%; top: 12.95%">
          负责人：石昊<br />电话：13916243612<br />邮箱：18247412@qq.com
        </div>
      </div>

      <div
        class="Vector8 ttf1"
        style="
          left: 987.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        工程检测
      </div>
      <div class="Frame10801" style="left: 988.43px; top: 158.78px">
        <div class="ttf1" style="left: 11.55%; top: 12.95%">
          负责人：曹东升<br />电话：13046601175<br />邮箱：22361760@qq.com
        </div>
      </div>

      <div
        class="Vector8 ttf1"
        style="
          left: 1447.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        建筑结构数字化
      </div>
      <div class="Frame10801" style="left: 1448.43px; top: 158.78px">
        <div class="ttf1" style="left: 11.55%; top: 12.95%">
          负责人：王煜成<br />电话：17621682274<br />邮箱：wychpsz@126.com
        </div>
      </div>

      <div
        class="Vector8 ttf1"
        style="
          left: 1907.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        装配式建筑
      </div>
      <div class="Frame10801" style="left: 1908.43px; top: 158.78px">
        <div class="ttf1" style="left: 5%; top: 12.95%">
          负责人：陈玲珠<br />电话：13764953929<br />邮箱：20040392chen@163.com
        </div>
      </div>

      <div
        class="Vector8 ttf1"
        style="
          left: 2367.22px;
          top: 82.22px;
          text-align: center;
          font-weight: 400;
          font-size: 36.4583px;
        "
      >
        预应力工程
      </div>
      <div class="Frame10801" style="left: 2368.43px; top: 158.78px">
        <div class="ttf1" style="left: 11.55%; top: 12.95%">
          负责人：张富文<br />电话：13774262868<br />邮箱：hangfuwen@sribs.com
        </div>
      </div>

      <div
        class="Frame11035"
        style="left: 2955px; top: 103px; width: 240px; height: 328px"
      >
        <img src="@/assets/image/gfwz.png" width="240px" alt="官方网站" />
        <div class="ttf1" style="left: 64px; top: 283px; font-size: 28px">
          官方网站
        </div>
      </div>
      <div
        class="Frame11035"
        style="left: 3319px; top: 103px; width: 240px; height: 328px"
      >
        <img src="@/assets/image/wxgzh.png" width="234px" alt="微信公众号" />
        <div class="ttf1" style="left: 47px; top: 283px; font-size: 28px">
          微信公众号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr1: [
        '既有建筑结构安全性检测评估',
        '房屋工程质量检测评估',
        '施工影响下房屋检测评估',
        '优秀历史建筑综合检测评估及文物建筑勘察',
        '房屋结构抗震鉴定',
        '房屋灾后检测评估',
        '房屋完损检测',
        '房屋渗漏水检测',
        '房屋外立面完损及高空坠物安全隐患排查检测',
        '房屋振动测试',
        '工程尽调与设施设备调查',
        '建筑工程司法和仲裁鉴定',
      ],
      arr2: [
        '结构健康监测',
        '建筑结构精细化测绘与数字实景模型创建',
        '无人机遥感测绘与咨询',
        '建筑运维管理系统开发与BIM咨询',
      ],
      arr3: [
        '新型结构体系研发与测试',
        '大型工程结构和构件性能试验',
        '复杂结构仿真分析',
        '木竹结构设计咨询',
        '工程咨询',
      ],
      arr4: [
        '装配式混凝土建筑套筒灌浆饱满性检测和缺陷整治',
        '装配式钢结构构件及结构性能检测与评估',
        '建筑及市政预制部品部件现场检验和实验室检验',
        '装配式建筑外墙渗漏水检测',
        '装配式建筑施工质量全过程管控和咨询',
      ],
      arr5: ['预应力工程深化设计和施工', '预应力工程技术咨询与产品研发'],
      arr6: [
        '城镇建筑建设和运行全生命期的检测监测、鉴定评估、技术咨询等综合技术服务和研发创新。',
        '立足结构、扩展全专业的建筑安全诊断方案，保障城镇建筑运营安全，助力城市运行精细化管理。',
        '上海市首批甲级房屋质量检测资质企业。上海市规模和业务量最大、综合实力最强的房屋质量检测机构之一。',
        '蝉联历次上海市房屋质量检测行业综合考评第一。',
      ],
    };
  },
  methods: {
    arrClick(item) {
      console.log('1', item);
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
