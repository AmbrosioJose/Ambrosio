<template>
    <section class="hero is-fullheight is-white" >
        <div class="hero-body ">
            <div class="container" >
                <div class="columns">
                    <div class="column is-centered has-text-centered is-one-fifth">
                        <img src="../assets/globeIcon.png">
                        <h1 class="title">Web</h1>
                    </div>
                    <div class="column is-centered has-text-centered is-half">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Web',
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
    .is-child{
        box-shadow: .5px .5px 3px #000000;
    }
</style>