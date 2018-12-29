<template>
    <div class="view-container">
        <!--顶部玩家-->
        <div class="user-top"></div>
        <!--左手边玩家-->
        <div class="user-left"></div>
        <!--底部玩家-->
        <div class="user-bottom">



        </div>
        <!--右手边玩家-->
        <div class="user-right"></div>

    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "home",
    components: {},
    methods: {
        list() {}
    }
};
</script>

<style type="text/scss" lang="scss">
.view-container {
    position: relative;
    width: 750px;
    height: 400px;
    background-color: #066e6d;
}
.user-bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 160px;
    background-color: red;
}
</style>
