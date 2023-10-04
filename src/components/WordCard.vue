<template>
    <div @click="toggleCard">
    <transition name="flip">
        <component 
        :frontText="wordData.originalText" 
        :backText="wordData.translatedText" 
        :oldDate="wordData.oldDate"

        :is="cardSide"
        
        
        />
    </transition>
  </div>
</template>

<script>
import CardFront from './CardFront.vue';
import CardBack from "./CardBack.vue";

export default{
    name: "WordCard",
    props: {
    wordData: {
      default: [{       
            id:"0",
            originalText:"It's over for today",
            translatedText:"It's over for today",
            oldDate: Date.now(),
        }
      ]
    }
    },
    data(){
      return{
        flipped: false,
      }
    },
    computed: {
      cardSide(){
        if(this.flipped) return CardFront;
        else return CardBack;
      }
    },
    methods: {
      toggleCard(){
        this.flipped = !this.flipped;
      }
    },

};
</script>

<style scoped lang="scss">

</style>