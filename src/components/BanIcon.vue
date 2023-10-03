<template>
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="1.5em" 
    viewBox="0 0 512 512"
    @mouseenter="doSome"
    
    ><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
</template>

<script lang="ts">
export default{
    name: "BanIcon",
    methods:{
        doSome(){
            window.eventBus.emit('new-description',0);
        }
    },
}

</script>

<style scoped lang="scss">
svg{
    margin: 0px 5px 0px -10px;
    position: relative;
    top: 3px;

    fill: lighten($color: #182d4f, $amount: 15);

    &:hover, &:focus{
        cursor: pointer;
        fill: red;
    }
    
}
</style>