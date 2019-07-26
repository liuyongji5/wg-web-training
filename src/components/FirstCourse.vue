<template>
    <div class="first-course">
        <div class="manager-header">
            <div class="manager-title">{{'访问分析'}}</div>
            <div class="manager-tabs">
                <div class="tab" @click="showTab1"
                     v-bind:class="{'tab-active':displayTab1}">
                    <tab-label first-msg="总访问量" second-msg="15%" third-msg="相较于昨天" second-row-msg="204,138"></tab-label>
                </div>
                <div class="tab" @click="showTab2"
                     v-bind:class="{'tab-active':displayTab2}">
                    <tab-label first-msg="总访客数" second-msg="15%" second-row-msg="9,624"></tab-label>
                </div>
                <div class="tab" @click="showTab3"
                     v-bind:class="{'tab-active':displayTab3}">
                    <tab-label first-msg="总访问时长" second-msg="8%" direction="up" second-row-msg="8时34分22秒"></tab-label>
                </div>
            </div>
        </div>
        <div class="manager-content">
            <div v-show="displayTab1">
                <img src="../t1.png"/>
            </div>
            <div v-show="displayTab2">
                <img src="../t2.png"/>
            </div>
            <div v-show="displayTab3">
                <img src="../t3.png"/>
            </div>
        </div>
    </div>
</template>

<script>
    import tabLabel from "./tabLabel"
    export default {
        data() {
            return {
                displayTab1: true,
                displayTab2: false,
                displayTab3: false,
            };
        },
        components: {tabLabel},
        methods: {
            showTab1() {
                this.displayTab1 = true
                this.displayTab2 = false
                this.displayTab3 = false
            },
            showTab2() {
                this.displayTab1 = false
                this.displayTab2 = true
                this.displayTab3 = false
            },
            showTab3() {
                this.displayTab1 = false
                this.displayTab2 = false
                this.displayTab3 = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .first-course {
        width: 690px;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        display: inline-flex;

        .manager-header {

            .manager-title {
                background-color: #ffffff;
                height: 40px;
                display: flex;
                align-items: center;
                padding-left: 20px;
                border-bottom: 1px solid rgba(223, 223, 223, 0.2);
            }

            .manager-tabs {
                display: flex;
                height: 70px;
                justify-content: flex-start;
                font-size: 14px;

                .tab {
                    flex-shrink: 1;
                    width: 230px;
                    color: #999999;
                    cursor: pointer;
                    border-left: 1px solid rgba(223, 223, 223, 0.2);
                    border-right: 1px solid rgba(223, 223, 223, 0.2);
                    padding-left: 20px;
                    padding-top: 5px;

                }

                .tab-active {
                    color: #000000;
                    background-color: #ffffff;

                    border-bottom: 1px solid #ffffff;
                }
            }
        }

        .manager-content {
            background: #ffffff;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 690px;
            }
        }

    }
</style>

<style lang="scss">
    .first-course {
        .artificial-tab {
            .change-tip {
                .small-font {
                    margin-right: 1px;
                }
            }
        }
    }
</style>

<style>
    body {
        background-color: rgb(247, 247, 247) !important;
    }
</style>
