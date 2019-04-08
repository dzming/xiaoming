<template>
    <div id="jingxuan">
        <JXbanner></JXbanner>
        <selectedStore></selectedStore>
        <Hot></Hot>
        <New></New>
        <JXlist></JXlist>
    </div>
</template>
<script>
import JXbanner from './JXbanner.vue';
import selectedStore from './selectedStore.vue';
import Hot from './Hot.vue';
import New from './New.vue';
import JXlist from './JXlist.vue';
export default {
    components: {
        JXbanner,
        selectedStore,
        Hot,
        New,
        JXlist
    }
};
</script>
<style scoped>
#jingxuan {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>