<template>
    <NavigationMenu></NavigationMenu>
    <WordCard :wordData="getCurrentWord()"></WordCard>
    <RatingMenu @new-rating="stuff($event)"></RatingMenu>
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
    },
    getCurrentWord(){
      return this.sortedWords[0]
    },
    stuff(rating){
      this.algoSM2(rating);
      console.log(this.getCurrentWord().algorithm.recalls);
      console.log(this.getCurrentWord().algorithm.easinessFactor);
      console.log(this.getCurrentWord().date);
      console.log(this.getCurrentWord().oldDate);
      console.log(this.getCurrentWord());
      this.sortedWords.shift();
      console.log(this.sortedWords);
    },
    algoSM2(q){
      let n = this.getCurrentWord().algorithm.recalls;
      let EF =  parseFloat(parseFloat(this.getCurrentWord().algorithm.easinessFactor + (0.1 - (5-q)*(0.08 + (5-q)*0.02))).toFixed(3));
      console.log(EF)
      if(EF < 1.3){
        EF = 1.3;
      }
      this.getCurrentWord().algorithm.easinessFactor = EF;
     
      if(q >= 3){
        if(n == 0){
          this.getCurrentWord().date = Date.now() + 86400000;
        }
        else if(n == 1){
          this.getCurrentWord().date = Date.now() + (6*86400000);
        }
        else{
          this.getCurrentWord().date = (Math.round((Date.now() - this.getCurrentWord().oldDate)/86400000) *  EF) * 86400000;
        }

        this.getCurrentWord().algorithm.recalls++;
      }
      else{
        this.getCurrentWord().algorithm.recalls = 0;
        this.getCurrentWord().date = Date.now() + 86400000;
      }
      this.getCurrentWord().oldDate = Date.now();
    },

  },
  beforeMount() {
    this.getWords();
    console.log(this.words);
    console.log(this.sortedWords);
    console.log(this.getCurrentWord());
  },
}

</script>


<style scoped>


</style>
