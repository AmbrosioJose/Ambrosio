<template>
    <section class="hero is-fullheight is white" >
        <div class="hero-body ">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered">
  
                    </div>
                    <div class="column is-center has-text-centered">
                        <img src="../assets/robotIcon.png">
                        <h1 class="title">Robotics</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default {
        name: 'Robotics',
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
    #robotics{
        background-color: #6890E7;
    }
</style>