<template>
  <div id="app">
    <Entrance id="Entrance"/>

   <section class="hero is-small is-white" id="filler">
        <div class="hero-body ">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered is-one-fifth">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Web :field="sharedState.seedData[0]"   id="Web"/>
    <Robotics :field="sharedState.seedData[1]" id="Robotics"/>
    <Android :field="sharedState.seedData[2]" id="Android"/>
    <ML :field="sharedState.seedData[3]" id="ml"/>

       <section class="hero is-small is-white" id="filler2">
        <div class="hero-body ">
            <div class="container">
                <div class="columns">
                    <div class="column is-centered has-text-centered is-one-fifth">
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Showcase from './components/Showcase.vue'
import Entrance from './components/Entrance.vue'
import Android from './components/Android.vue'
import ML from './components/ML.vue'
import Web from './components/Web.vue'
import Robotics from './components/Robotics.vue'
import { store } from './store.js';

export default {
  name: 'app',
  data () {
    return {
      sharedState: store.state,
      totalScroll: 0,
      sectionScroll: 0,
      currentStage: 0,
      entranceHeight: 0,
      webHeight: 0,
      roboticsHeight: 0,
      androidHeigh: 0,
      mlHeight: 0,
      on: 0,
      timer: {},
      resize:false,
      appScrollSelf:false
    }
  },
  props: ['this.sharedState'],
  components:{
    Entrance,
    Web,
    ML,
    Android,
    Robotics
  },
  methods: {
        handleScroll: function (event) {
          console.log('scroll')
          event.target.scrollingElement.scrollTop
          console.log(' Total scroll: '+ event.target.scrollingElement.scrollTop)
          this.sectionScroll = event.target.scrollingElement.scrollTop
          console.log(' Section scroll: '+ this.sectionScroll)
          let activeComponentIdName = store.getActiveComponent().referenceName
          console.log(' active component ' + activeComponentIdName + ' starts at: ' + window.document.getElementById(activeComponentIdName).offsetTop + ' ends at: ' + (window.document.getElementById(activeComponentIdName).clientHeight + window.document.getElementById(activeComponentIdName).offsetTop))
          let userVisualHeight = event.srcElement.documentElement.clientHeight
          console.log(' client height: ' + userVisualHeight)
          if(!this.appScrollSelf){
          if(this.totalScroll > event.target.scrollingElement.scrollTop){
            console.log('  scrolled up')
            // Scrolled 10% above active component
            let tenPercentAboveSection = window.document.getElementById(activeComponentIdName).offsetTop - window.document.getElementById(activeComponentIdName).clientHeight * .10
            console.log('    ten percent: ' + tenPercentAboveSection)
            if( (event.target.scrollingElement.scrollTop) < (tenPercentAboveSection) ){
              console.log('     more than 10%')
              if(store.getActiveComponent().id>0){
                store.setActiveComponent(store.getActiveComponent().id-1)
                this.smooth(store.getActiveComponent().referenceName)
                }
            }
          }else if( this.totalScroll < event.target.scrollingElement.scrollTop ){
            console.log('  scrolled down')
            // Scrolled 10% below active component
            let tenPercentBelowSection = window.document.getElementById(activeComponentIdName).clientHeight + window.document.getElementById(activeComponentIdName).offsetTop + window.document.getElementById(activeComponentIdName).clientHeight * .10
            console.log('    ten percent: ' + tenPercentBelowSection)
            if( (event.target.scrollingElement.scrollTop + userVisualHeight) > (tenPercentBelowSection) ){
              console.log('     more than 10%')
              if(store.getActiveComponent().id<5){
                store.setActiveComponent(store.getActiveComponent().id+1)
                this.smooth(store.getActiveComponent().referenceName)
                }
            }
          } else{}
          } else{}
          this.totalScroll = event.target.scrollingElement.scrollTop
          console.log("------")

          // =================================timed scroll===========================
          // // console.log(" on variable:"+this.on)
          // // console.log(" on resize:"+this.resize)
          // //if(!(this.resize)&&(this.on===0||this.on==2)){
          //   console.log('  shouldnt')
          //   this.on++
          //   //console.log('in if '+ this.on)
          //   if ( this.timer ) clearTimeout(this.timer);
          //   let vueNow=this
          //   this.timer = setTimeout((vueNow)=>{
          //     // Make your AJAX request here...
          //     if(this.on==1){
          //       this.on=2
            
          //       // console.log("current scroll level: " + event.target.scrollingElement.scrollTop)
          //       // console.log("Entrance start: " + event.target.activeElement.childNodes[1].children["0"].scrollHeight)
          //       // console.log("Web start: " + event.target.activeElement.childNodes[1].children[1].scrollHeight)
          //       // console.log("robotics start: " + event.target.activeElement.childNodes[1].children[2].scrollHeight)
          //       // console.log("android start: " + event.target.activeElement.childNodes[1].children[3].scrollHeight)
          //       // console.log("ml start: " + event.target.activeElement.childNodes[1].children[2].scrollHeight)
          //       if(this.currentScroll>event.target.scrollingElement.scrollTop){
          //         console.log('      scrolled up')
          //         //console.log('id: '+this.currentStage)
          //         if (this.currentStage>0)
          //         this.takeStage(this.currentStage - 1)

          //       }
          //       else if(this.currentScroll<event.target.scrollingElement.scrollTop){
          //         console.log('      scrolled down')
          //         if (this.currentStage<5)
          //           this.takeStage(this.currentStage + 1)
          //       }
          //       else{
          //         //console.log('same')
          //       }
          //       this.currentScroll=event.target.scrollingElement.scrollTop
          //       //console.log('------------')
          //       }
          //       else if(this.on==2)
          //         this.on=0
          //       else 
          //         this.on=0
          //       //console.log('deep '+this.on)
          //   }, 1000);
          // }
          // else{
          //   this.resize=false
            
          //   }
          //=======================end timed scroll=======================
            
            //console.log(event)

            // .target.scrollingElement.scrollTop
            // .target.scrollingElement.scrollHeight
            // .target.body.clientHeight
            // .target.defaultView.scrollY
            // .target.activeElement.childNodes[1].scrollHeight

            // robotics 
            // .target.scrollingElement.childNodes[2].childNodes[1].childNodes[4].clientHeight
            // .target.scrollingElement.childNodes[2].childNodes[1].childNodes[4].offsetTop
            // .target.scrollingElement.childNodes[2].childNodes[1].childNodes[4].offsetWidth
            // .target.scrollingElement.childNodes[2].childNodes[1].childNodes[4].__vue__.$options._componentTag
            //.target.scrollingElement.childNodes[2].childNodes[1].childNodes[4].__vue__.$parent._isMounted

            //all
            // .target.activeElement.childNodes[1].children
            // in-order
            //.target.activeElement.childNodes[1].children["0"]
            //.target.activeElement.childNodes[1].children[1]
            //.target.activeElement.childNodes[1].children[2]
            //.target.activeElement.childNodes[1].children[3]
            //.target.activeElement.childNodes[1].children[4]
        },
        takeStage(id){
          this.currentStage=id%6
          console.log('on stage: ' + id)
          switch (id){
            case 0:{
              console.log('Entrance')
              //window.location.hash = '#Entrance';
              this.store.setActiveComponent(0)
              window.location.hash = '#Entrance';
              break
            }
            case 1:{
              console.log('Web')
              this.store.setActiveComponent(1)
              window.location.href = '#Web';
              
              break
            }
            case 2:{
              console.log('Robotics')
              this.store.setActiveComponent(2)
              window.location.href = '#Robotics';
              break
            }
            case 3:{
              console.log('Android')
              this.store.setActiveComponent(3)
              window.location.href = '#Android';
              break
            }
            case 4:{
              console.log('ml')
              this.store.setActiveComponent(4)
              window.location.href = '#ml';
              break
            }
            case 5:{
              console.log('footer')
              this.store.setActiveComponent(5)
              window.location.href = '#footer';
              break
            }
          }
        },
        handleR (){
          console.log('rezise--------------')
          this.resize=true
          console.log('  robotics height after resize: '+this.$children[2].$el.offsetTop)
          console.log('  client height after resize: '+this.$el.clientHeight)
          console.log('-')
        },
        smooth (idName) {
          let size = window.document.getElementById(idName).offsetTop
          this.appScrollSelf = true
    	    window.scrollTo({
            top: size,
            behavior: 'smooth'
          })
          this.appScrollSelf = false
        }
    },

    created: function () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleR);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleR);
    },
    mounted : function (){
      console.log('mounted')
    },
    updated : function (){
      console.log('updated')
    }
}
</script>

<style>
</style>
