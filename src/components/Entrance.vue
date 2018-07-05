<template>

<section class="hero is-fullheight is-dark" >
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1><strong>Ambrosio</strong></h1>
          </a>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Powered by
            </a>
            <a class="navbar-item"  @click="smooth('footer')">
              Contact
            </a>
            <a class="navbar-item" href="https://github.com/btmnAmbrosio" target="_blank">
              Github
            </a>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true">a</span>
              <span aria-hidden="true">b</span>
              <span aria-hidden="true">d</span>
              </a>
          </div>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
    <div class="columns">
        <div class="column">
            <img src="../assets/btmn.jpg" width="400" height="400">
        </div>
        <div class="column" id="landing-text">
            <h1 class="title">
                Jose Ambrosio
            </h1>
            <h2 class="subtitle">
                I'm a software developer with an interest in web development, android, robotics, and machine learning.
            </h2>
            <a class="button is-danger is-outlined is-rounded"  @click="smooth('Web')">View Work</a>
        </div>
    </div>

    </div>
  </div>

</section>
</template>

<script>
    import { store } from '../store.js';
    
    
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
            let size2 = window.document.getElementById(idName).offsetTop
            // let size = window.document.getElementById('web').offsetHeight
            // console.log(size)
            console.log('active: '+store.getActiveComponent().name)
            store.setActiveComponentByName(idName)
            console.log('active2: '+store.getActiveComponent().name)
    	      window.scrollTo({
              top: size2,
              behavior: 'smooth'
            })
          }
        }
    }
</script>

<style>
  .h1,h2,#title{
    text-shadow: .5px .5px .5px #111111;
  }

  #landing-text {

  height: 160 vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 12rem;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
