<template>

<section class="hero is-dark is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1><strong>Ambrosio</strong></h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Powered by
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <a class="navbar-item" href="https://github.com/btmnAmbrosio">
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
            <img src="../assets/btmn.jpg" width="500" height="500">
        </div>
        <div class="column">
            <h1 class="title">
                Jose Ambrosio
            </h1>
            <h2 class="subtitle">
                I'm a software developer with an interest in web development, android, robotics, and machine learning.
            </h2>
            <h2 class="subtitle">
                Checkout my projects below
            </h2>
        </div>
    </div>

    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li v-for="field in sharedState.seedData" :key="field.id"  @click="setActiveField(field.id)" :class="{'is-active': field.active}"><a>{{field.name}}</a></li>
        </ul>
      </div>
    </nav>
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
          setActiveField (field) {
            
            store.setActiveCourse(field)
          }
        }
    }
</script>

<style>

</style>
