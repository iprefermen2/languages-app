

<template>
    <div class="dude">
      <article class="">
       <strong>{{displayword}}</strong>
       <span>Last exercised on: 25.9.2004<br>
              138 days before.</span>
      </article>
      <a href="#" class="ctrl">x</a>
    </div>
</template>

<script lang="ts">
export default{
    name: "WordCard",
    props: {
      name: String,
    },
    data(){
      return{
        displayword: this.name,
      }
    },
};
</script>

<style>

</style>