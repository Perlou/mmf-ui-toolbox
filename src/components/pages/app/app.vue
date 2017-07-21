<template>
    <div id="app">
        <!-- header -->
        <div id="layout-header">
            <md-dialog md-open-from="authorBtn" md-close-to="#authorBtn" ref="authorDialog">
                <md-dialog-title>关于作者</md-dialog-title>
                <md-dialog-content>
                    <md-layout>
                        <md-avatar>
                            <img src="//avatars1.githubusercontent.com/u/12897436?v=3&s=460" alt="">
                        </md-avatar>
                        <div style="padding: 8px 0 0 8px;">Perlou (perloukevin@gmail.com)</div>
                    </md-layout>
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" @click.native="toAuthorGithub">
                        github
                    </md-button>
                    <md-button class="md-primary" @click.native="closeDialog('authorDialog')">
                        ok
                    </md-button>
                </md-dialog-actions>
            </md-dialog>

            <md-toolbar>
                <md-button class="md-icon-button">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1">MMF-UI Toolbox</h2>

                <md-menu md-direction="bottom left">
                    <md-button class="md-icon-button" md-menu-trigger>
                        <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content>
                        <md-menu-item id="authorBtn" @click.native="openDialog('authorDialog')">关于作者</md-menu-item>
                        <md-menu-item @click.native="toCode">源码地址</md-menu-item>
                    </md-menu-content>
                </md-menu>
            </md-toolbar>
        </div>
        <!-- end header -->

        <div id="layout-main">
            <router-view></router-view>
        </div>
    </div>
</template>
<style src="./app.scss" lang="scss"></style>
