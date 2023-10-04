<template>
    <NavigationMenu></NavigationMenu>
    <WordCard :wordData="sortedWords[0]"></WordCard>
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
        sortedWords: [{}],
      }
  },
  methods:{
    getWords(){
        this.sortedWords.shift();
        this.words.filter(e => {
        if(Math.ceil(Date.now()/86400000) >= Math.ceil(e.date/86400000)){
          this.sortedWords.push(e);
      }})    
    }
  },
  beforeMount() {
    this.getWords();
    console.log(this.words);
    console.log(this.sortedWords[0]);
  },
}

</script>


<style scoped>


</style>
