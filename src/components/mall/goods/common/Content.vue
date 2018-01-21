<template>
    <div>
        <div class="section" v-for="(item,index) in dataList" :key="index">

            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>

                    <a href="/goods/43.html" v-for="(items,i) in item.level2catelist" :key="i">{{items.subcatetitle}}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(val,ind) in item.datas" :key="ind">
                            <router-link :to="{name:'goodsDetail',params:{id:val.artID}}">
                                <div class="img-box">
                                    <img :src="val.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{val.artTitle}}</h3>
                                    <p class="price">
                                        <b>¥{{val.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{val.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{val.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>             
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            dataList:[]
        }
    },
    methods: {
        getData(){
            this.$http.get(this.$api.goodsContent)
            .then(res=>{
                console.log(res);
                this.dataList=res.data.message;
            })
        }
    },
    created () {
        this.getData();
    }
};
</script>

<style scoped>

</style>
