<template>
    <div>
        <dd>
            <router-link to="" v-for="item in list" :key="item.id">{{item.title}}
                <Category v-if="item.subcates && item.subcates.length != 0" :list="item.subcates"></Category>
            </router-link>
        </dd>
    </div>
</template>

<script>
export default {
  name: "Category",
  props: ["list"]
};
</script>

<style scoped>

</style>