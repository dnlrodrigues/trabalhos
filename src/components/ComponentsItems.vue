<template>
    <div class="divInit">
        <img :src="src" :alt="name">
    </div>
</template>

<style scoped>
    .divInit{
        width: 15%;
        float: left;
        margin: 2% 5%;
    }
    img{
        width: 100%;
        height: 15em;
        float: left;        
    }
</style>

<script>
export default {
    name: 'componentsItems',
    /* inheritAttrs: false, */
    props: {
        name: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    }
}
</script>

