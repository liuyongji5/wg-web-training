<template>
    <div class="tab-label">
        <div class="tab-first-row">
            <div class="tab-first-col">{{this.firstMsg}}</div>
            <div :class="direction"></div>
            <div class="tab-second-col" :style="{'color':color}">{{this.secondMsg}}</div>
            <div class="tab-third-col">{{this.thirdMsg}}</div>
        </div>
        <div class="tab-second-row">{{this.secondRowMsg}}</div>
    </div>
</template>

<script>
    export default {
        name: "tabLabel",
        props: {
            firstMsg: {
                default: ""
            },
            secondMsg: {
                default: ""
            },
            thirdMsg: {
                default: ""
            },
            secondRowMsg: {
                default: ""
            },
            direction: {
                default: "down"
            }
        },
        computed: {
            color(){
                if(this.direction === "up"){
                    return "red"
                }
                return "#00bbbd"
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-label {
        .tab-first-row {
            display: flex;
            align-items: flex-end;

            .tab-second-col {
                margin-left: 2px;
                margin-right: 8px;
                font-size: 12px;
                color: #00bbbd;
            }

            .tab-third-col {
                font-size: 12px;
            }

            .up {
                width: 0;
                height: 0;
                margin-left: 8px;
                border: 5px solid;
                border-color: red transparent transparent transparent;
            }

            .down {
                width: 0;
                height: 0;
                margin-left: 8px;
                margin-bottom: 5px;
                border: 5px solid;
                border-color: transparent transparent #00bbbd transparent;
            }
        }

        .tab-second-row {
            margin-top: 10px;
            font-size: 20px;
            color: #000000;
        }

    }
</style>
