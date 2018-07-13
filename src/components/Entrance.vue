<template>
<div>
<nav class="navbar has-text-weight-bold is-black " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        
        <h1 class="title has-text-white"> <img src="../assets/codeIcon.png" height="40" width="35"/> Ambrosio </h1>
      </a>
    </div >
    
    <div class="navbar-start ">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div class="navbar-menu ">
        <a class="navbar-item has-text-white" id="mItem">
          Home
        </a>
        <a class="navbar-item has-text-white"  id="mItem"  @click="smooth('footer')">
          Contact
        </a>
        <a class="navbar-item has-text-white"  id="mItem" href="https://github.com/btmnAmbrosio" target="_blank">
          Github
        </a>
      </div>

    </div>
  </nav>
<section class="hero is-fullheight is-black" id="back">


  <!-- Hero content: will be in the middle -->
  <div class="hero-header">
    <div class="container has-text-centered ">
    <div class="columns is-mobile">
        <div class="column" id="landing-text">
          <h1 class="title is-1 has-text-weight-bold">
                Jose Ambrosio
            </h1>
            <h2 class="subtitle is-2 is-capitalized has-text-weight-semibold" id="intro">
                I'm a software developer with an interest in web development, android, robotics, and machine learning.
            </h2>
            <a class="button is-danger is-inverted is-outlined is-rounded"  @click="smooth('Web')">View Work</a>
        </div>
    </div>
    <div class="columns">
      <div class="column" id="landing-text">
      </div>
    </div>
    </div>
  </div>


</section>
  </div>
</template>

<script>
    import { store } from '../store.js';
    import anime from 'animejs'
    
    
    export default {
        name: 'Entrance',
        data () {
            return {
              sharedState: store.state
            }
        },
        props: ['this.sharedState'],
        components: {
        },
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
    
          }
        },
        mounted() {
          anime({
            targets: '#lineDrawing .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false
          });
        },
    }
</script>

<style>


  #landing-text {


  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 12rem;
  padding-right: 1rem;
  padding-left: 1rem;
  text-shadow: 3px 2px 4px #111111;
  
}
#intro{
  text-shadow: 4px 4px 10px #111111;
}
#back{
   background-image: url("../assets/wave.png");
    background-repeat: no-repeat;
    background-position: center bottom;
}

#mItem:hover{
  background-color:#000000;
}

</style>
