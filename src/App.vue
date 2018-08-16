<template>
    <div id="main">
        app
        <router-view/>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less" rel="stylesheet/less">
@import url('./less/variable.less');
html,body {
    width: 100%;
    height: 100%;
    background: #F7F8FC;
}
#main {
    width: 100%;
    height: 100%;
    padding:17px @normal-padding;
}
</style>
