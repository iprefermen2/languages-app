<template>
    <div class="dude">
      <article>
       <strong>{{frontText}}</strong>
       <span>Last exercised on: {{lastExercised()}}<br>
              {{daysBefore()}} days before.</span>
      </article>
      <a href="#" class="ctrl">x</a>
    </div>   
</template>

<script >
export default{
    name: 'CardFront',
    props: {
    frontText: {
      type: String,
      default: "It's over for today"
    },
    oldDate:{
      default: Date.now()
    }
  },
  methods:{
    lastExercised(){
      let procesedDate = new Date(parseInt(this.oldDate))
      return procesedDate.getDate() + "." + (procesedDate.getMonth()+1) + "." + procesedDate.getFullYear()
    },
    daysBefore(){
      return Math.ceil((Date.now() - parseInt(this.oldDate))/86400000)
    }
  },
}
</script>

<style scoped lang="ts">
    
</style>
