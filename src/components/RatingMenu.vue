<template>
    <BanIcon></BanIcon>
    <StarIcon></StarIcon>
    <StarIcon></StarIcon>
    <StarIcon></StarIcon>
    <StarIcon></StarIcon>
    <StarIcon></StarIcon>
    <RatingExplanation></RatingExplanation>
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

</style>