<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-body">
            <div class="columns ">
                <div class="column is-centered is-4 has-text-centered ">
                    <img src="../assets/brainIcon.png">
                    <h1 class="title is-2">Machine Learning</h1>
                    <h2 class="subtitle is-3">License Plate Reader</h2>
                    <p class="subtitle is-4">A partner and a used Python, scikit-learn, and opencv to read the characters of a license plate</p>
                </div>
                <div class="column is-centered  is-6 has-text-centered">
                        <iframe src="/src/assets/ReadLetters.html"   width="800em"class="mlDisplay" > 
                            <p>Your browser does not support iframes.</p>
                        </iframe> 
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
                columnSize: 0
            } 
        },
        components: {
        },
        props: ['field'],
        methods: {
            
        },
        updated() {
            console.log(this)
        },
        watch:{
            columnSize: (v) => {
                console.log(v)
            }
        },
        mounted() {
            this.columnSize = this.$el.children["0"].childNodes["0"].childNodes[2].offsetWidth
        }
    }
</script>

<style>
    .mlDisplay{
    height: 400px;



    }

</style>