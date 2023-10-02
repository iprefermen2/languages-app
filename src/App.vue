<template>
    <NavigationMenu></NavigationMenu>
    <WordCard name="juntos"></WordCard>
    <RatingMenu></RatingMenu>
</template>

<script lang="ts">
import WordCard from './components/WordCard.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import RatingMenu from './components/RatingMenu.vue'


export default{
  name: "App",
  components:{
    WordCard, 
    NavigationMenu,
    RatingMenu,
  },
}
</script>


<style scoped>


</style>
