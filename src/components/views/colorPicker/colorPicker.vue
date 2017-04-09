<template>
    <div class="view view-color-picker">
        <div class="picker-input">
            <md-input-container>
                <label>请输入16进制数值</label>
                <md-input v-model="value" maxlength="7"></md-input>
            </md-input-container>
        </div>
        <div class="color-table">
            <md-table>
                <!-- table header -->
                <md-table-header>
                    <md-table-row>
                        <md-table-head>色块 (颜色名称)</md-table-head>
                        <md-table-head>16进制色值</md-table-head>
                        <md-table-head>rgb</md-table-head>
                        <md-table-head>hsl</md-table-head>
                    </md-table-row>
                </md-table-header>
                <!-- end table header -->

                <!-- table body -->
                <md-table-body>
                    <!-- 基础主题色 -->
                    <md-table-row>
                        <md-table-cell>
                            <div class="color-block" :style="{background: cBase.hex}"></div>
                            <span :style="{color: cBase.hex}">基础主题色</span>
                        </md-table-cell>
                        <md-table-cell>
                            {{cBase.hex}}
                        </md-table-cell>
                        <md-table-cell>
                            rgb{{cBase.rgb}}
                        </md-table-cell>
                        <md-table-cell>
                            {{cBase.hsl}}
                        </md-table-cell>
                    </md-table-row>
                    <!-- end 基础主题色 -->

                    <!-- 二级主题色 -->
                    <md-table-row>
                        <md-table-cell>
                            <div class="color-block" :style="{background: cSecond.rgb}"></div>
                            <span :style="{color: cBase.hex}">二级主题色</span>
                        </md-table-cell>
                        <md-table-cell>
                            {{cSecond.hex}}
                        </md-table-cell>
                        <md-table-cell>
                            rgb{{cSecond.rgb}}
                        </md-table-cell>
                        <md-table-cell>
                            {{cSecond.hsl}}
                        </md-table-cell>
                    </md-table-row>
                    <!-- end 二级主题色 -->
                </md-table-body>
                <!-- end table body -->
            </md-table>
        </div>
    </div>
</template>
<style src="./colorPicker.scss" lang="scss" scoped></style>