<template>
    <div @click="lastExercised()" class="dude">
      <article class="">
       <strong>{{backText}}</strong>
       <span>Last exercised on: {{lastExercised()}}<br>
              {{daysBefore()}} days before.</span>
      </article>
      <a href="#" class="ctrl">x</a>
    </div>   
</template>

<script>
export default{
    name: 'CardBack',
    props: {
    backText: {
      type: String,
      default: "It's over for today"
    },
    oldDate: {
    },

  },
  methods:{
    lastExercised(){
      let procesedDate = new Date(parseInt(this.oldDate))
      return procesedDate.getDate() + "." + (procesedDate.getMonth()+1) + "." + procesedDate.getFullYear()
    },
    daysBefore(){
      return Math.ceil((Date.now() - parseInt(this.oldDate))/86400000)
    }
  }
}
</script>

<style scoped lang="ts">
    
</style>
