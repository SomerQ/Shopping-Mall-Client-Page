<template>
    <div>
        <div class="goods-spec">
            <h1>{{detailData.title}}</h1>
            <p class="subtitle">{{detailData.sub_title}}</p>
            <div class="spec-box">
                <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{detailData.goods_no}}</dd>
                </dl>
                <dl>
                    <dt>市场价</dt>
                    <dd>
                        <s id="commodityMarketPrice">¥{{detailData.market_price}}</s>
                    </dd>
                </dl>
                <dl>
                    <dt>销售价</dt>
                    <dd>
                        <em class="price" id="commoditySellPrice">¥{{detailData.sell_price}}</em>
                    </dd>
                </dl>
            </div>

            <div class="spec-box">
                <dl>
                    <dt>购买数量</dt>
                    <dd>
                        <div class="stock-box">
                            <input id="commodityChannelId" type="hidden" value="2">
                            <input id="commodityArticleId" type="hidden" value="98">
                            <input id="commodityGoodsId" type="hidden" value="0">
                            <el-input-number size="mini" v-model="shopQuantity"></el-input-number>
                        </div>
                        <span class="stock-txt">
                            库存
                            <em id="commodityStockNum">{{detailData.stock_quantity}}</em>件
                        </span>
                    </dd>
                </dl>
                <dl>
                    <dd>
                        <div class="btn-buy" id="buyButton">
                            <button class="buy" @click="cartAdd">立即购买</button>
                            <button class="add" @click="cartAdd">加入购物车</button>
                        </div>
                    </dd>
                </dl>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props:['detailData'],
    data(){
        return{
            shopQuantity:0
        }
    },
    methods: {
        cartAdd(){
             this.$store.commit('modifyShopping', {                
                 id: this.$route.params.id,
                 count: this.number}
             )}
    }
};
</script>

<style scoped>

</style>