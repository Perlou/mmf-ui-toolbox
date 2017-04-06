<template>
    <div class="view view-home">
        <md-card class="md-primary">
            <md-card-media>
                <img src="../../../assets/cardBg.jpg" alt="card" />
                <md-ink-ripple></md-ink-ripple>
            </md-card-media>  
            <md-card-header>
                <div class="md-title">颜色生成器</div>
                <div class="md-subhead">element-ui</div>
            </md-card-header>

            <md-card-actions>
                <md-button @click.native="$router.push('colorPicker')">进入</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
