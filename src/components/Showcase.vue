<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1><strong>{{field.name}}</strong></h1>
                <div v-if="field.projects[0].link!=''">
                    <iframe src="/src/assets/ReadLetters.html" rel="stylesheet" width="800" height="500" class="mlDisplay" href="javascript: document.body.scrollIntoView(false);"> 
                        <p>Your browser does not support iframes.</p>
                    </iframe> 
                </div>
                <div v-if="field.slides">
                    <img v-for="link in field.projects[0].pictures" :src="link" width="400" height="400"></img>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Showcase',
        data () {
            return {
            }
        },
        components: {
        },
        props: ['field'],
        methods: {
        }
    }
</script>

<style>
    .mlDisplay{
    height: 400px;
    overflow: auto;
    display: flex;
    flex-direction: column-reverse;
    }
</style>