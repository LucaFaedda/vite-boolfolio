<script>
import { store } from '../store';
export default {
    props:{
        card:Object,// per richiamarlo per stampare la visualizzazzione bisogna usare card o comunque il nome dato nella props
    },
    data(){
        return{
            store,
        }
    },
    methods:{
        prova(card){
            console.log(this.card)
        }
    }
}
</script>
<template >
    <div class="card mx-5 my-3"  style="width: 18rem;">
        <img :src=" card.cover_image != null ? `${store.baseUrl}storage/${card.cover_image}` : 'https://picsum.photos/200/130'" :alt="card.title">
        <div class="card-body">
            <h3 class="card-title text-danger">{{card.title}}</h3>
            <p class="card-text"><span class="fw-bold">Uscito il: </span>{{card.data_progetto}}<br>
            <span class="card-text"><span class="fw-bold">Difficoltà: </span>{{card.difficoltà}}</span></p>
            <!-- <span class="card-text" ><span class="fw-bold">Difficoltà: </span>{{card.type.name == null ? 'non disponibile' : card.type.name}}</span><br> -->
            <span  class="card-text fw-bold"> Tecnologia usata:</span>
            <span v-for="tecno in card.technology" :key="technology_id" >
                 {{tecno.name}}
            </span>
            
            <a href="#" class="btn btn-primary">Leggi il progetto</a>
        </div>
    </div>
</template>

<style lang="scss">

</style>