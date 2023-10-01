<template>
    <NavigationMenu></NavigationMenu>
    <div></div>
    <WordCard name="juntos"></WordCard>
</template>

<script lang="ts">
import WordCard from './components/WordCard.vue'
import NavigationMenu from './components/NavigationMenu.vue'

export default{
  name: "App",
  components:{
    WordCard, 
    NavigationMenu,
  },
}
</script>


<style scoped>


</style>
