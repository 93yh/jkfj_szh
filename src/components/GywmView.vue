<template>
  <div class="gywm">
    <div
      class="Frame710 F71001"
    >
      <div
        class="Frame11035 F1103501"
        :style="`
          background-image: url( ${require('@/assets/image/image105.png')} )`"
      ></div>
      <div
        class="Frame11035 F1103502"
      >
        <div class="ttf3">
          <li
            class="L01"
            v-for="arr in arr6"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
    </div>
    <div
      class="Frame710 F71002"
    >
      <div class="ttf2 ttf201">房屋质量检测鉴定</div>
      <div
        class="Frame11035 F1103503"
      >
        <div
          class="ttf3 ttf301"
        >
          <li
            class="L02"
            v-for="arr in arr1"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf202">
        建筑结构健康监测与数字化服务
      </div>
      <div
        class="Frame11035 F1103506"
      >
        <div
          class="ttf3 ttf302"
        >
          <li
            class="L02"
            v-for="arr in arr2"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf203">
        结构性能测试与分析咨询
      </div>
      <div
        class="Frame11035 F1103507"
      >
        <div
          class="ttf3 ttf303"
        >
          <li
            class="L02"
            v-for="arr in arr3"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf204">
        装配式建筑检测评估与质量管控
      </div>
      <div
        class="Frame11035 F1103508"
      >
        <div
          class="ttf3 ttf304"
        >
          <li
            class="L02"
            v-for="arr in arr4"
            :key="arr"
          >
            {{ arr }}
          </li>
        </div>
      </div>
      <div class="ttf2 ttf205">预应力工程</div>
      <div
        class="Frame11035 F1103509"
      >
        <div
          class="ttf3 ttf305"
        >
          <li
            class="L02"
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
      class="Frame710 F71003"
    >
      <div
        class="Vector8 ttf1 ttf101"
      >
        科研中心
      </div>
      <div class="Frame10801 F1080101">
        <div class="ttf1 ttf1001">
          负责人：冷予冰<br />电话：13402081579<br />邮箱：leng_yb@163.com
        </div>
      </div>

      <div
        class="Vector8 ttf1 ttf102"
      >
        房屋鉴定
      </div>
      <div class="Frame10801 F1080102">
        <div class="ttf1 ttf1001">
          负责人：石昊<br />电话：13916243612<br />邮箱：18247412@qq.com
        </div>
      </div>

      <div
        class="Vector8 ttf1 ttf103"
      >
        工程检测
      </div>
      <div class="Frame10801 F1080103">
        <div class="ttf1 ttf1001">
          负责人：曹东升<br />电话：13046601175<br />邮箱：22361760@qq.com
        </div>
      </div>

      <div
        class="Vector8 ttf1 ttf104"
      >
        建筑结构数字化
      </div>
      <div class="Frame10801 F1080104">
        <div class="ttf1 ttf1001">
          负责人：王煜成<br />电话：17621682274<br />邮箱：wychpsz@126.com
        </div>
      </div>

      <div
        class="Vector8 ttf1 ttf105"
      >
        装配式建筑
      </div>
      <div class="Frame10801 F1080105">
        <div class="ttf1 ttf1002">
          负责人：陈玲珠<br />电话：13764953929<br />邮箱：20040392chen@163.com
        </div>
      </div>

      <div
        class="Vector8 ttf1 ttf106"
      >
        预应力工程
      </div>
      <div class="Frame10801 F1080106">
        <div class="ttf1 ttf1001">
          负责人：张富文<br />电话：13774262868<br />邮箱：hangfuwen@sribs.com
        </div>
      </div>

      <div
        class="Frame11035 F1103504"
      >
        <img src="@/assets/image/gfwz.png" width="240px" alt="官方网站" />
        <div class="ttf1 ttf1003">
          官方网站
        </div>
      </div>
      <div
        class="Frame11035 F1103505"
      >
        <img src="@/assets/image/wxgzh.png" width="234px" alt="微信公众号" />
        <div class="ttf1 ttf1004">
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
