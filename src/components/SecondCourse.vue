<template>
    <div class="second-course">
        <my-header>
            <span>平台访问量</span>
        </my-header>
        <flow-panel></flow-panel>
        <my-foot>
            <span>过去7天</span>
            <img class="down-icon" src="../down-icon.png"/>
        </my-foot>
    </div>
</template>

<script>
    import MyHeader from "./MyHeader"
    import FlowPanel from "./FlowPanel";
    import MyFoot from "./MyFoot";

    export default {
        name: "SecondCourse",
        components: {
            MyFoot,
            FlowPanel,
            MyHeader
        },
    }
</script>

<style lang="scss" scoped>
    .second-course {
        width: 382px;
        border-radius: 4px;
        box-shadow: 0 0 10px 0 rgba(191, 197, 206, 0.4);
        background-color: #ffffff;

        .down-icon {
            width: 14px;
            height: 10px;
            margin-left: 4px;
        }
    }
</style>
