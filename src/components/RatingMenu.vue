<template>
    <div>
        <BanIcon></BanIcon>
        <StarIcon v-for="n in 5" :key="n"></StarIcon>
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
};
</script>





<style lang="scss" scoped>
div{
    margin-top: 50px;
}

</style>