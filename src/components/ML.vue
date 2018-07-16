<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-body">
            <div class="container" >
            <div class="columns .is-multiline">
                <div class="column is-centered is2 has-text-centered ">
                    <img src="../assets/brainIcon.png" :class="{'animated zoomIn ': field.active}" style=" webkit-animation-delay: .6s;">
                    <h1 class="title is-2">Machine Learning</h1>
                    <h2 class="subtitle is-3">License Plate Reader</h2>
                    <p class="subtitle is-4">A partner and a used Python, scikit-learn, and opencv to read the characters of a license plate</p>
                </div>
                <div class="column is-centered  is-half has-text-centered">
                        <iframe src="/src/assets/ReadLetters.html"   :width="this.columnWidth" :height="this.columnHeight" class="mlDisplay" > 
                            <p>Your browser does not support iframes.</p>
                        </iframe> 
                </div>
            </div>
        </div>
        </div>
        <!--<button class="button is-large is-grey-lighter is-outlined is-rounded" v-show="field.active" @click="smooth('footer')"><i class="fa fa-chevron-down"></i></button>-->
    </section>
</template>

<script>
    import anime from 'animejs'
    import { store } from '../store.js';
    export default {
        name: 'ML',
        data () {
            return {
                columnWidth: 0,
                columnHeight: 0,
                resize: false
            } 
        },
        components: {
        },
        props: ['field'],
        methods: {
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
    
          },
        handleResize (){
            this.resize=true
            this.columnWidth = this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetWidth - this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetWidth *.1
            this.columnHeight = this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetHeight - this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetHeight *.1
        }
        },
        mounted() {
            this.columnWidth = this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetWidth
            this.columnHeight = this.$el.children["0"].childNodes["0"].childNodes["0"].childNodes[2].offsetHeight

            
        },
		created: function () {
            window.addEventListener('resize', this.handleResize);
        },
        destroyed: function () {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style>
    .mlDisplay{
    height: 400px;
    }

</style>