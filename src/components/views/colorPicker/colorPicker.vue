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
                    </md-table-row>
                </md-table-header>
                <!-- end table header -->

                <!-- table body -->
                <md-table-body>
                    <!-- 一级主题色 -->
                    <md-table-row>
                        <md-table-cell>
                            <div 
                                class="color-block" 
                                :style="{background: primary.hex}"
                            ></div>
                            <span :style="{color: primary.hex}">{{primary.name}}</span>
                        </md-table-cell>
                        <md-table-cell>
                            {{primary.hex}}
                        </md-table-cell>
                    </md-table-row>
                    <!-- end 一级主题色 -->

                    <!-- 一级主题色 -->
                    <md-table-row>
                        <md-table-cell>
                            <div class="color-block" :style="{background: baseBlack.hex}"></div>
                            <span :style="{color: baseBlack.hex}">{{baseBlack.name}}</span>
                        </md-table-cell>
                        <md-table-cell>
                            {{baseBlack.hex}}
                        </md-table-cell>
                    </md-table-row>
                    <!-- end 一级主题色 -->

                </md-table-body>
                <!-- end table body -->
            </md-table>
        </div>
    </div>
</template>
<style src="./colorPicker.scss" lang="scss" scoped></style>