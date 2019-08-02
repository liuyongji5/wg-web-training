<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "my-header"
    }
</script>

<style scoped lang="scss">
    .header {
        height: 59px;
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #333333;
        display: flex;
        align-items: center;
        padding-left: 24px;
        border-bottom: 1px solid #e8e8e8;
    }
</style>
