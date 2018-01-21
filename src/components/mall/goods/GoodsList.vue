<template>
    <div>
        <goodsnav></goodsnav>
        <goodscontent></goodscontent>
    </div>
</template>

<script>
import goodsnav from "./common/Nav";
import goodscontent from "./common/Content";
export default {
  components: {
    goodsnav,
    goodscontent
  }
};
</script>

<style scoped>
.el-carousel__container {
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  /* 只需要将line-height修改成50px，文字就自动定位到下面了 */
  line-height: 50px;
  margin: 0;
}
</style>