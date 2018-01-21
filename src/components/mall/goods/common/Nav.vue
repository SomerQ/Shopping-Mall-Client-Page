<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <!--类别菜单-->
                    <div class="left-220" style="margin:0;">
                        <div class="banner-nav">
                            <ul>
                                <!--此处声明下面可重复循环-->

                                <li v-for="item in navData.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="items in item.subcates" :key="items.id"> {{ items.title }} </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <!--如有三级分类，此处可循环-->
                                        <dl>
                                            <dt>
                                                <router-link to="">{{item.title}}</router-link>
                                            </dt>
                                            <dd>
                                                <Category :list="item.subcates"></Category>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--/类别菜单-->

                    <!--幻灯片-->
                    <div class="left-705">

                        <div class="banner-img">
                            <!-- <div id="focus-box" class="focus-box"> -->
                            <Layout :layoutData="navData.sliderlist"></Layout>
                            <!-- <ul class="slides">
                                    <li class="" style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                        <a href="/goods.html">
                                            <img src="/templates/main/images/focus_1.png" draggable="false">
                                        </a>
                                    </li>
                                    <li style="width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
                                        <a href="/goods.html">
                                            <img src="/templates/main/images/focus_2.png" draggable="false">
                                        </a>
                                    </li>
                                </ul>
                                <ol class="flex-control-nav flex-control-paging">
                                    <li>
                                        <a class="">1</a>
                                    </li>
                                    <li>
                                        <a class="flex-active">2</a>
                                    </li>
                                </ol> -->
                            <!-- </div> -->

                        </div>
                    </div>
                    <!--/幻灯片-->

                    <!--推荐商品-->
                    <div class="left-220">
                        <Hot :sideData="navData.toplist"></Hot>
                    </div>
                    <!--/推荐商品-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Layout from "./Layout";
import Category from "./Category";
import Hot from './Hot'
export default {
  components: {
    Layout,
    Category,
    Hot
  },
  data() {
    return {
      navData: {
        catelist: [],
        sliderlist: [],
        toplist: []
      }
    };
  },
  methods: {
    getData() {
      this.$http.get(this.$api.goodsTop).then(res => {
        console.log(res);
        this.navData = res.data.message;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>

</style>