<template>
    <section class="hero is-fullheight  is-white" >
        <div class="hero-body ">
            <div class="container" >
                <div class="columns">
                    <div class="column is-centered has-text-centered is-two-fifth">
                        <img src="../assets/globeIcon.png" class="animated infinite bounce">
                        <h1 class="title is-2">Web</h1>
                        <h2 class="subtitle is-4">A collection of different Web apps</h2>
                        
                    </div>
                    <div class="column is-centered has-text-centered is-half">
                        <div v-if="two" id="show" >
                            <div class=" has-text-left">
                                <a  v-if="two" class="delete is-large fadeInDown animated" style=" webkit-animation-delay: .6s; padding-bottom:10px;"  @click="toChooser()" ></a>
                            </div>
                            <div>
                                <img class="fadeInDown animated" style=" webkit-animation-delay: .25s; padding-top:10px;" :src="this.imageSrc" width="700px" height="650px"></img>
                            </div>
                        </div>
                        <div class="tile is-ancestor" v-if="!two">
                            <div class="tile is-parent" >
                                <article class="tile is-child box" id="one" v-on:mouseover="mouseOver('#one')" v-on:mouseout="out('#one')" @click="takeStage('#one')">
                                    <p class="title">CLI</p>
                                    <img src="../assets/cmdIcon.png"></img>
                                </article>
                            </div>
                            <div class="tile is-parent" >
                                <article class="tile is-child box" id="two" v-on:mouseover="mouseOver('#two')"  v-on:mouseout="out('#two')" @click="takeStage('#two')">
                                    <p class="title">Savings</p>
                                    <img src="../assets/savingsIcon.png"></img>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-ancestor" v-if="!two">
                            <div class="tile is-parent">
                                <article class="tile is-child box" id="three" v-on:mouseover="mouseOver('#three')"  v-on:mouseout="out('#three')" @click="takeStage('#three')">
                                    <p class="title">Rating</p>
                                    <img src="../assets/ratingIcon.png"></img>
                                </article>
                            </div>
                            <div class="tile is-parent">
                                <article class="tile is-child box" id="four" v-on:mouseover="mouseOver('#four')"  v-on:mouseout="out('#four')" @click="takeStage('#four')">
                                    <p class="title">Chat</p>
                                    <img src="../assets/chatIcon.png"></img>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button class="button is-large is-grey-lighter is-outlined is-rounded"  @click="smooth('Robotics')"><i class="fa fa-chevron-down"></i></button>
    </section>
</template>

<script>
    import anime from 'animejs'
    export default {
        name: 'Web',
        data () {
            return {
                two:false,
                imageSrc:"src/assets/astro.jpg"
            }
        },
        components: {
        },
        props: ['field'],
        methods: {
            smooth (idName) {
                let componentStart = window.document.getElementById(idName).offsetTop
    	        window.scrollTo({
                top: componentStart,
                behavior: 'smooth'
                })
            },
            mouseOver (x) {

                let el = document.querySelector(x)

                let domNode = anime({
                    targets: el,
                    translateY: -10,
                });
            },
            out(x){

                let el = document.querySelector(x)

                let domNode = anime({
                    targets: el,
                    translateY: 0,
                    easing: 'linear'
                });
            },
            takeStage(id){
                console.log(id)
                let el = document.querySelectorAll('.is-child')
                console.log(el)

                el.forEach(tile=>{tile.className='tile is-child fadeOutDown animated'})
                console.log(el)
                if(id=='#one'){
                    this.imageSrc = "src/assets/cli3.png"
                } else if(id=='#two'){
                    this.imageSrc = "src/assets/savingsApp.png"
                } else if(id=='#three'){
                    this.imageSrc = "src/assets/ratingsApp.png"
                } else{
                    this.imageSrc = "src/assets/chatApp.png"
                }
                this.two=true
            },
            toChooser(){
                let image = document.querySelector('#show')
                image.className='fadeOutUp animated'
                image.style=''
                let tiles = document.querySelectorAll('.is-child')
                tiles.forEach(tile=>{tile.className='tile is-child fadeInUp animated'; tiles.style+='webkit-animation-delay: 1s;' })
                this.two=false
                tiles.forEach(tile=>{tile.className='tile is-child'; tiles.style+='webkit-animation-delay: 1s; ' })
            }
        },
        watch:{
            two: function (val) {
                console.log(val)
            }
        }
    }
</script>

<style>

    
    .is-child:hover{
        box-shadow: .5px .5px .5px #000000;
        cursor:pointer;
    }
    #show {
        webkit-animation-duration: 3s;
        webkit-animation-delay: 2s;
        webkit-animation-iteration-count: infinite;
    }


    
</style>