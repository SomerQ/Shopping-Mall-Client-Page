<template>
  <div>
    <el-carousel trigger="click">
      <el-carousel-item v-for="item in layoutData" :key="item.id">
        <img :src="item.img_url" :alt="item.title">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "layout",
  props: ["layoutData"]
};
</script>

<style scoped>

</style>