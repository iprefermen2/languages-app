<template>
    <div>
        <BanIcon
        @new-rating="rateWord($event)"
        ></BanIcon>
        <StarIcon v-for="n in 5" :key="n"
        @new-rating="rateWord($event)"
        ></StarIcon>
        <RatingExplanation></RatingExplanation>
    </div>
</template>

<script lang="ts">
import StarIcon from './StarIcon.vue';
import BanIcon from './BanIcon.vue';
import RatingExplanation from './RatingExplanation.vue';

export default{
    name: "RatingMenu",
    components: { 
      StarIcon,
      BanIcon,
      RatingExplanation,
     },
     methods:{
        rateWord(e:number){
            this.$emit('new-rating',e)
        }
     }
};
</script>





<style lang="scss" scoped>
div{
    margin-top: 50px;
}

</style>