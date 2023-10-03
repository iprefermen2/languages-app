<template>
    <p v-if="ratingKey == 0">
       <strong>"Total blackout",</strong> complete failiure to recall the information
    </p>
    <p v-else-if="ratingKey == 1">
      <strong>Incorrect response,</strong> but upon seeing the correct answer it felt similiar
    </p>
    <p v-else-if="ratingKey == 2">
        <strong>Incorrect response,</strong> but upon seeing the correct answer it seemed easy to remember
    </p>
    <p v-else-if="ratingKey == 3">
        <strong>Correct response,</strong> but required significant effort to recall
    </p>
    <p v-else-if="ratingKey == 4">
        <strong>Correct response,</strong> after some hesitation
    </p>
    <p v-else-if="ratingKey == 5">
        <strong>Correct response</strong> with perfect recall
    </p>
</template>

<script lang="ts">
export default{
    name: "RatingExplanation",
    data() {
        return{
            ratingKey: 100,
        }
    },
    created() {
        window.eventBus.on('new-description', (e:number) => (this.ratingKey = e))
    },
}

</script>

<style scoped lang="scss">
p{
    font-size: 18px;
    color: #fff;
}
</style>