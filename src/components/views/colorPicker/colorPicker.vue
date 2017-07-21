<template>
    <div class="view view-color-picker">
        <div class="picker-input">
            <md-input-container>
                <label>请输入16进制数值(color primary)</label>
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
                    <!-- primary -->
                    <md-table-row v-if="primary">
                        <md-table-cell class="color-block-cell">
                            <div 
                                class="color-block" 
                                :style="{background: primary.hex}"
                            ></div>
                            <span>{{primary.name}}</span>
                        </md-table-cell>
                        <md-table-cell>
                            <div>{{primary.hex}}</div>
                            <div>{{primary.color | rgb}}</div>
                            <div>{{primary.color | hsl}}</div>
                        </md-table-cell>
                    </md-table-row>
                    <!-- end primary -->

                    <!-- base black -->
                    <md-table-row v-if="baseBlack">
                        <md-table-cell class="color-block-cell">
                            <div class="color-block" :style="{background: baseBlack.hex}"></div>
                            <span>{{baseBlack.name}}</span>
                        </md-table-cell>
                        <md-table-cell>
                            <div>{{baseBlack.hex}}</div>
                            <div>{{baseBlack.color | rgb}}</div>
                            <div>{{baseBlack.color | hsl}}</div>
                        </md-table-cell>
                    </md-table-row>
                    <!-- end base black -->

                    <!-- table row -->
                    <md-table-row 
                        v-for="v, k in colors"
                        :key="k">
                        <md-table-cell class="color-block-cell">
                            <div 
                                class="color-block" 
                                :style="{background: v.hex}"
                            ></div>
                            <span>{{v.name}}</span>
                        </md-table-cell>
                        <md-table-cell>
                            <div>{{v.hex}}</div>
                            <div>{{v.color | rgb}}</div>
                            <div>{{v.color | hsl}}</div>
                        </md-table-cell>
                    </md-table-row>
                    <!-- end table row -->

                </md-table-body>
                <!-- end table body -->
            </md-table>
        </div>
    </div>
</template>
<style src="./colorPicker.scss" lang="scss" scoped></style>