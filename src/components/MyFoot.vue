<template>
    <div class="foot">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "MyFoot"
    }
</script>

<style lang="scss" scoped>
    .foot {
        height: 48px;
        border-top: 1px solid #e8e8e8;
        margin-top: 15px;
        display: flex;
        align-items: center;
        color: #737373;
        font-size: 13px;
        font-family: sans-serif;
        padding-left: 24px
    }
</style>
