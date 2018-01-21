<template>
    <div>
        <div class="magnifier" id="magnifier1">
            <div class="magnifier-container">
                <div class="images-cover"></div>
                <!--当前图片显示容器-->
                <div class="move-view"></div>
                <!--跟随鼠标移动的盒子-->
            </div>
            <div class="magnifier-assembly">
                <div class="magnifier-btn">
                    <span class="magnifier-btn-left">&lt;</span>
                    <span class="magnifier-btn-right">&gt;</span>
                </div>
                <!--按钮组-->
                <div class="magnifier-line">
                    <ul class="clearfix animation03">
                        <li v-for="item in bannerList" :key="item.id">
                            <div class="small-img">
                                <img :src="item.original_path" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <!--缩略图-->
            </div>
            <div class="magnifier-view"></div>
            <!--经过放大的图片显示容器-->
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import "@/lib/imgzoom/css/magnifier.css";
import "@/lib/imgzoom/js/magnifier";
export default {
  props: ["bannerList"],
  updated() {
    var magnifierConfig = {
      magnifier: "#magnifier1",
      width: 340,
      height: 340,
      moveWidth: null,
      zoom: 5
    };
    var _magnifier = $().imgzoon(magnifierConfig);
  },
};
</script>

<style scoped>

</style>