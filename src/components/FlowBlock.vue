<template>
    <div class="flow-block" :style="color"></div>
</template>

<script>
    export default {
        name: "FlowBlock",
        props: ["flow"],
        computed: {
            color(){
                if(0 < this.flow && this.flow <= 900){
                    return {backgroundColor: "#44a5f5", opacity: 0.3}
                }else if(900 < this.flow && this.flow <= 1800){
                    return {backgroundColor: "#44a5f5", opacity: 0.8}
                }else if(1800 < this.flow && this.flow <= 2700){
                    return {backgroundColor: "#4892f6"}
                }else if(2700 < this.flow && this.flow <= 3600){
                    return {backgroundColor: "#2e5ec5", opacity: 0.9}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flow-block {
        width: 100%;
        height: 100%;
    }
</style>
