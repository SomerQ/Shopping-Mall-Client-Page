<template>
    <div>
        <!-- 导航栏 -->
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="/index.html">首页</a> &gt;
                <a href="/goods.html">购物商城</a>
                <a href="/goods/42/1.html">商品详情</a>

            </div>
        </div>

        <!-- 商品详情 -->
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <!--页面左边-->
                    <div class="left-925">
                        <div class="goods-box clearfix">
                            <!--商品图片-->
                            <div class="pic-box">
                                <detail-view :bannerList="detailData.imglist"></detail-view>
                            </div>
                            <!--/商品图片-->

                            <!--商品信息-->
                            <DetailInfo :detailData="detailData.goodsinfo"></DetailInfo>
                            <!--/商品信息-->
                        </div>

                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <!--选项卡-->
                            <!-- <div id="tabHead" class="tab-head"> -->
                            <el-tabs v-model="detailPage" type="card" @tab-click="handleClick">
                                <el-tab-pane label="商品介绍" name="first">
                                    <div v-html="detailData.goodsinfo.content"></div>
                                </el-tab-pane>
                                <el-tab-pane label="商品评论" name="second">
                                    <!--网友评论-->
                                    <div class="comment-box">
                                        <Comments :commentsData="comments"></Comments>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                            <!-- </div> -->
                            <!--/选项卡-->
                        </div>

                    </div>
                    <!--/页面左边-->

                    <!--页面右边-->
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <Hot :sideData="detailData.hotgoodslist"></Hot>
                            </div>
                        </div>
                    </div>
                    <!--/页面右边-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hot from "./common/Hot";
import Comments from "./common/Comments";
import DetailInfo from "./common/DetailInfo";
import detailView from "./common/DetailView";
export default {
  components: {
    Hot,
    Comments,
    DetailInfo,
    detailView
  },
  data() {
    return {
      id: null,
      detailPage: "first",
      detailData: {
        goodsinfo: {},
        hotgoodslist: [],
        imglist: []
      },
      comments: []
    };
  },
  methods: {
    getData() {
      this.$http.get(this.$api.goodsDetail + this.id).then(res => {
        console.log(res);

        this.detailData = res.data.message;
      });
    },
    getComments() {
      this.$http
        .get(this.$api.commentList + "goods" + "/" + this.id, {
          params: { pageIndex: 1, pageSize: 10 }
        })
        .then(res => {
          console.log(res);

          this.comments = res.data.message;
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.getComments();
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getData();
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.getData();
    }
  }
};
</script>

<style scoped>

</style>