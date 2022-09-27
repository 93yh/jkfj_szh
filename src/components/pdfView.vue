<template>
  <div class="pdfView">
    <!-- <div>
      <el-button size="mini">上一页</el-button>
      <el-button size="mini">下一个</el-button>
    </div> -->
    <canvas
      v-for="item in totalPage"
      :key="item"
      :id="'the-canvas' + item"
      class="pdf-content pdf-content2"
    ></canvas>
  </div>
</template>
<script>
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
// import api from '@/settings';

export default {
  name: 'pdfView',
  props: {
    pdfUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      totalPage: [],
      thispageNum: 1, // 当前页数
    };
  },
  created() {
    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    const winW = 1863;
    // window.console.log(winW);

    // pdf 的 localhost地址是把用来做测试的pdf放在了项目里，实际运用可以用后台返回的线上地址
    // const pdfUrl = './image112.pdf';
    // let pdfUrl;
    const loadingTask = pdfjsLib.getDocument(this.pdfUrl);

    loadingTask.promise.then(
      (pdf) => {
        const pageNum = pdf.numPages;
        this.totalPage = pageNum;
        for (let i = 1; i <= pageNum; i += 1) {
          pdf.getPage(i).then((page) => {
            const viewport = page.getViewport({ scale: 1 });
            // eslint-disable-next-line
            const scale = (winW / viewport.width).toFixed(2);
            const scaledViewport = page.getViewport({ scale });
            const canvas = document.getElementById(`the-canvas${i}`);
            const context = canvas.getContext('2d');
            canvas.height = scaledViewport.height;
            canvas.width = scaledViewport.width;
            const renderContext = {
              canvasContext: context,
              viewport: scaledViewport,
            };
            const renderTask = page.render(renderContext);
            renderTask.promise.then(() => {});
          });
        }
      },
      (reason) => {
        window.console.error(reason);
      },
    );
  },

  methods: {},
  mounted() {},
};
</script>
<style scoped>
.pdfView {
  width: 1863px;
  height: 871px;
  overflow: auto;
  background-size: 100% 100%;
}
.pdf-content2 {
  position: relative;
  /* width: 1863px; */
  height: 871px;
  background-size: 100% 100%;
}
/* 定义滚动条样式 */
::-webkit-scrollbar {
  width: 10px;
  /* //定义滚动条宽度 */
  height: 5px;
  /* //定义滚动条高度 */
  border-radius: 5px;
  /* //定义滚动条圆角 */
  background-color: rgba(54, 95, 75, 0);;
  /* //定义滚动条颜色 */
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  /* //定义滑块圆角 */
  /* box-shadow: inset 0 0 0px rgba(240, 240, 240, 0.5); */
  /* //定义滑块阴影 */
  background-color: rgba(86, 156, 122, 0.15);;
  /* //定义滑块颜色 */
}
</style>
