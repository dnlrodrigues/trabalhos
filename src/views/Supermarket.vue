<template>
    <div class="init margin5">
        <div class="init displayFlex margin1">
            <div class="init flexCenter">
                <h2 class="title flexCenter"> Supermarket </h2>    
            </div>
        </div>
        <div class="init displayFlex margin1">
            <div class="init flexCenter">
                <button class="btn marginSide2" :class="addClassActive('carnes')" @click="setStore('Carnes', 'carnes')"> Carnes </button>
                <button class="btn marginSide2" :class="addClassActive('verduras')" @click="setStore('Verduras / Legumes', 'verduras')"> Verduras/Legumes </button>
                <button class="btn marginSide2" :class="addClassActive('integrais')" @click="setStore('Integrais', 'integrais')"> Integrais </button>
                <button class="btn marginSide2" :class="addClassActive('frutas')" @click="setStore('Frutas', 'frutas')"> Frutas </button>
            </div>            
        </div>
        <div class="init" v-if="getStore().componentSelected">
            <h3 class="title subtitle"> {{getStore().title}} </h3>
            <div class="init">
                <componentsItems v-for="(item, index) in getStore().componentSelected" :key="index" v-bind="item"/>
            </div>
            
        </div>  
    </div>
    
</template>

<style>
    .init{
        float:left;
        width: 100%;
    }

    .margin5{
        margin-top:6em;
    }

    .margin1{
        margin-top: 1%;
    }

    .marginSide2{
        margin: 0 2%;
    }

    .displayFlex{
        display: flex;
    }

    .flexCenter{
        align-items: center;
    }

    .title{
        color:#522020;
        float: left;
        margin-left: 45%;
    }

    .subtitle{
        width: 20%;
        margin-left: 40%;
        margin-top: 3%;

    }
</style>

<script>

import componentsItems from '@/components/ComponentsItems.vue'

export default {
    name: 'Supermarket',
    components: {
        componentsItems
    },
    data(){
        return {
            classMenu: {
                carnes: 'btn-danger',
                verduras: 'btn-success',
                integrais: 'btn-info',
                frutas: 'btn-warning'
            }
        }
    },
    computed: {
        addClassActive(type){
            return(type) => {
                if(type == this.$store.state.typeSelected){
                    return {'btn-primary': true};
                }
            
                return this.classMenu[type]; 
            }           
        },
        createSrc(src){
            return(src) => {
                return src;
            }
        },
        getStore(){
            /* return () => this.$store.state.componentSelected; */ //Metódo normal para recuperar dado da store
            return () => this.$store.getters.getStateComponent; //Usando getter para recuperar dado da store
        },
        setStore(title, type){
            return(title, type) => {
               return this.$store.commit('selected', {title, type});
            }
        }
    }
}
</script>


