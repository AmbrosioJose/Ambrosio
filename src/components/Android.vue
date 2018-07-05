<template>
    <section class="hero is-fullheight is-white" >
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered">
                        <img src="../assets/androidIcon.png">
                        <h1 class="title">Android</h1>
                        <img v-for="link in field.projects[0].pictures" :src="link" width="400" height="400" ></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Android',
        data () {
            return {
                slideIndex : 1
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