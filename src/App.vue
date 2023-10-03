<template>
    <NavigationMenu></NavigationMenu>
    <WordCard></WordCard>
    <RatingMenu></RatingMenu>
</template>

<script>
import WordCard from './components/WordCard.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import RatingMenu from './components/RatingMenu.vue'

import wordsData from './assets/wordsData.json'


export default{
  name: "App",
  components:{
    WordCard, 
    NavigationMenu,
    RatingMenu,
  },
  data() {
      return{
        words: wordsData,
      }
  },
}
</script>


<style scoped>


</style>
