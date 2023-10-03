<template>
    <div @click="toggleCard">
    <transition name="flip">
        <component  :is="cardSide" />
    </transition>
  </div>
</template>

<script lang="ts">
import CardFront from './CardFront.vue';
import CardBack from "./CardBack.vue";

export default{
    name: "WordCard",
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