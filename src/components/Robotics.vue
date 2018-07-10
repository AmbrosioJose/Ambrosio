<template>
    <section class="hero is-fullheight  is-white" >
        <div class="hero-body ">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered">
                        <td>
                            <div class="img-container-robo">
                                
                                <img src="../assets/rover.png"  class="top-robo"/>
                                <img src="../assets/roverInternal.png"  class="top-robo" />
                                <img src="../assets/roverCompete.png"  class="top-robo" />
                                
                            </div>
                        
                        </td>
                        <div id="buttons">
                            <button class="button is-danger is-outlined is-rounded" id="left-robo" @click="plusDivs(-1)"><strong>&#10094;</strong></button>
                            <button class="button is-danger is-outlined is-rounded" id="right-robo" @click="plusDivs(1)"><strong>&#10095;</strong></button>
                        </div>
                    </div>
                    <div class="column is-center has-text-centered">
                        <img src="../assets/robotIcon.png">
                        <h1 class="title">Robotics</h1>
                        <h2 class="subtitle">Swarmathon Competition</h2>
                        <p class="subtitle">I was part of a team competing in the Nasa Swarmathon Competition, which involves optimizing a rover and implementing a search algorithm so that the rover can autonomously collect small cubes. Part of what I did was filter some of the rover’s sensors as well as implemented A star to make the rover’s movement more efficient.</p>
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
                slideIndex : 1
            }
        },
        components: {
        },
        props: ['field'],
        methods: {
            showDivs (n){
                let x = this.$el.getElementsByClassName('top-robo')
                if (n > x.length) {this.slideIndex = 1}
                if (n < 1) {this.slideIndex = x.length}
                for (let i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                }
                x[this.slideIndex-1].style.display = "block";
                
            },
            plusDivs(n) {
                this.showDivs(this.slideIndex += n);
            }
        },
        mounted() {
            this.showDivs(1)
        }
    }
</script>

<style>

    .top-robo{
        height: 500px;
        width: 700px;

        border-radius: 20px;
        box-shadow: 1px 1px 5px #222222; 


    }
    #buttons{
        padding-top:10px;
    }
    .subtitle{
        text-shadow: .1px 1px 1px #111111; 
    }

</style>