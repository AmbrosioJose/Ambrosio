<template>
    <section class="hero is-fullheight is-white" >
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered">
                        <img src="../assets/androidIcon.png" :class="{'animated flip ': field.active}" style=" webkit-animation-delay: .6s;">
                        <h1 class="title">Android</h1>
                        <p class="subtitle">We made an android app similar to yelp for on-the-go food vendors. </p>
                    </div>
                    <div class="column is-centered has-text-centered">
                       
                        <td>
                            <div class="img-container">
                                <img src="../assets/mainScreen.png"  class="top"/>
                                <img src="../assets/mapCarts.png"  class="top" />
                                <img src="../assets/cart.png"  class="top" />
                                <img src="../assets/userProfile.png"  class="top"/>
                                <img src="../assets/android.png" class="bottom" />
                                <button class="button is-danger is-outlined is-rounded" id="left" @click="plusDivs(-1)">&#10094;</button>
                                <button class="button is-danger is-outlined is-rounded" id="right" @click="plusDivs(1)">&#10095;</button>
                            </div>
                        </td>
                    </div>
                </div>
            </div>
        </div>
        <button class="button is-large is-grey-lighter is-outlined is-rounded" v-show="field.active" @click="smooth('ml')"><i class="fa fa-chevron-down"></i></button>
    </section>
</template>

<script>
    import anime from 'animejs'
    import { store } from '../store.js';
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
            showDivs (n){

                let x = this.$el.getElementsByClassName('top')
                if (n > x.length) {this.slideIndex = 1}
                if (n < 1) {this.slideIndex = x.length}
                for (let i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  

                }
                x[this.slideIndex-1].style.display = "block";
                
            },
            plusDivs(n) {

                this.showDivs(this.slideIndex += n);
            },
                      smooth (idName) {
            let componentStart = window.document.getElementById(idName).offsetTop
            
            store.setActiveComponentByName(idName)
            console.log('active: ' + store.getActiveComponent().name)
            let browser=this.browser()
            console.log(browser)
             if(browser=='Edge') //IF IE > 10
            {
              console.log('EDGE')
              window.scrollTo(0,componentStart)
            }
            else if( browser=='Chrome') 
            {

              console.log('CHROME')
              window.scrollTo({
                top: componentStart,
                behavior: 'smooth'
              })
            }  else{
              console.log('idk')
              window.scrollTo(0,componentStart)
            }
          },
          browser () {
            if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
              return('Opera');
            } else if(navigator.userAgent.indexOf("Edge") != -1) {
              return('Edge');
            } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
              return('Chrome');
            } else if(navigator.userAgent.indexOf("Safari") != -1) {
              return('Safari');
            } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
              return('Firefox');
            } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) { //IF IE > 10
              return('IE'); 
            }  else {
              return('unknown');
            }
    
          }
        },
        mounted() {
            this.showDivs(1)
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
    .top{
        height: 33.45rem;
        width: 18.7rem;
    }
    .img-container { 
        position: relative; 
        height: 40rem;
        width: 30rem;
        }

    .img-container .top {
        position: absolute;
        top: 97.8px;
        left: 86.8px;
    }
    #left{
        position: absolute;
        top: 700px;
        left: 200px;
    }
    #right{
        position: absolute;
        top: 700px;
        left:250px;
    }

</style>