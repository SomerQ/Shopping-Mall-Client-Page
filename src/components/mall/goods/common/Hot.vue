<template>
    <div>
        <ul class="side-img-list">
            <li v-for="(item,index) in sideData" :key="index">
                <div class="img-box">
                    <label>{{ index+1 }}</label>
                    <img :src="item.img_url">
                </div>
                <div class="txt-box">
                    <router-link :to="{name:'goodsDetail',params:{id:item.id}}">{{item.title}}</router-link>
                    <span>{{item.add_time | dateFilter }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'Hot',
    props:['sideData']
};
</script>

<style scoped>

</style>