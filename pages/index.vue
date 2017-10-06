<template>
    <section>
        <div>Nuxt TypeScript Starter</div>
        <logo/>
        <div class="title-test" v-html="titleMarkup"></div>
        <div class="content-test" v-html="contentMarkup"></div>
        <div class="image-test" v-html="imageMarkup"></div>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "nuxt-class-component"
    import Logo from "~components/Logo.vue"
    import {getHomepage} from '~/api';

    @Component({
        components: {
            Logo
        },
        asyncData() {
            return getHomepage()
                .then((homepage) => ({
                    titleMarkup: homepage.titleMarkup,
                    contentMarkup: homepage.contentMarkup,
                    imageMarkup: homepage.imageMarkup,
                }));
        },
    })
    export default class extends Vue {
        titleMarkup: string = '';
        contentMarkup: string = '';
        imageMarkup: string = '';
    }
</script>
