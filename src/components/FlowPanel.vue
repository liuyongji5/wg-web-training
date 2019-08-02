<template>
    <div class="flow-panel">
        <div class="panel-header">
            <div class="day" v-for="day in week">{{day}}</div>
        </div>
        <div class="panel-body">
            <div class="day-data" v-for="d in weekData">
                <div class="hour-data" v-for="data in d">
                    <flow-block :flow="parseInt(data[2])" :key="data[0]+'_'+data[1]"></flow-block>
                </div>
            </div>
            <div class="panel-time">
                <div class="time" v-for="t in times">{{t}}</div>
            </div>
        </div>
        <div class="flow-rule">
            <div class="rule-blocks">
                <flow-block class="block" :flow="1"></flow-block>
                <flow-block class="block" :flow="901"></flow-block>
                <flow-block class="block" :flow="1801"></flow-block>
                <flow-block class="block" :flow="2701"></flow-block>
            </div>
            <div class="rule-numbers">
                <div class="number">0</div>
                <div class="number margin-left-15">900</div>
                <div class="number margin-left-15">1800</div>
                <div class="number margin-left-10">2700</div>
                <div class="number">3600</div>
            </div>
        </div>
    </div>
</template>

<script>
    import FlowBlock from "./FlowBlock";
    import service from "../js/service"

    export default {
        name: "FlowPanel",
        components: {FlowBlock},
        data() {
            return {
                blocks: [],
                weekData: [],
                week: ["周一", "周二", "周三", "周四", "周五", "周六", "周天"],
                times: []
            }
        },
        mounted() {
            service.getSecondCourseDatas((response) => {
                this.blocks = response.data.result.data[0].rows

                let len = this.blocks.length;
                let n = 24; //假设每行显示4个
                let lineNum = len % n === 0 ? len / n : Math.floor((len / n) + 1);
                let res = [];
                for (let i = 0; i < lineNum; i++) {
                    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
                    let temp = this.blocks.slice(i * n, i * n + n);
                    res.push(temp);
                }
                this.weekData = res
                console.log(res)
            }, () => {
                console.log("error")
            })

            for(let i = 0; i　< 24; i+=2) {
                this.times.push(i + ":00")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .flow-panel {

        padding-left: 24px;

        .panel-header {
            display: flex;
            margin-top: 16px;

            .day {
                width: 38px;
                height: 17px;
                font-size: 12px;
                margin-right: 5px;
                font-family: sans-serif;
            }
        }

        .panel-body {
            display: flex;

            .day-data {
                padding-right: 5px;

                .hour-data {
                    width: 38px;
                    height: 10px;
                    margin-top: 5px;
                }
            }
        }

        .panel-time {
            width: 37px;
            .time {
                margin-top: 5px;
                height: 25px;
                font-size: 12px;
                font-family: sans-serif;
                display: flex;
                justify-content: flex-end;
            }
        }
        .flow-rule {
            margin-top: 17px;
            .rule-blocks {
                height: 10px;
                display: flex;
                .block {
                    width: 70px;
                    margin-right: 5px;
                }
            }

            .rule-numbers {
                display: flex;
                font-family: sans-serif;
                font-size: 12px;
                justify-content: space-between;
                width: 295px;
                .number {
                    &.margin-left-15 {
                        margin-left: 15px;
                    }

                    &.margin-left-10 {
                        margin-left: 10px;
                    }
                }
            }
        }

    }
</style>
