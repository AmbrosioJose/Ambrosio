<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-body">
            <div class="columns is-multiline">
                <div class="column is-centered is-half has-text-centered ">
                    <img src="../assets/brainIcon.png">
                    <h1 class="title">Machine Learning</h1>
                </div>
                 <div class="column is-centered  is-half has-text-centered">
                    <div>
                        <iframe src="/src/assets/ReadLetters.html" rel="stylesheet" width="800" height="500" class="mlDisplay" href="javascript: document.body.scrollIntoView(false);"> 
                            <p>Your browser does not support iframes.</p>
                        </iframe> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'ML',
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