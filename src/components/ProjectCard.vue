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
    }
}
</script>
<template >
    <div class="card-personale mx-5 my-3"  style="width: 18rem;">
        <img :src=" card.cover_image != null ? `${store.baseUrl}storage/${card.cover_image}` : 'https://picsum.photos/200/130'" :alt="card.title">
        <div class="card-body-personale">
            <h3 class="text-danger">{{card.title}}</h3>
            <span class="fw-bold">Uscito il: </span>{{card.data_progetto}}<br>
            <span ><span class="fw-bold">Difficoltà: </span>{{card.difficoltà}}</span><br>
            <span  ><span class="fw-bold">Tipologia: </span>{{card.type ? card.type.name : 'non disponibile'}}</span><br> 
            <!-- // se è true allora stampami card.type.name altrimenti metti non disponibile -->
            <div v-if="!card.technology || !card.technology.length">
                <span  class=" fw-bold"> Tecnologia usata:</span><span>Non disponibile</span><br>
            </div>
            <div v-else >
                <span  class=" fw-bold"> Tecnologia usata:</span>
                <span  v-for="tecno in card.technology" :key="card.technology.id" >
                        {{tecno.name}}
                </span>

            </div>
            
            <router-link :to="{ name: 'single-project', params: { slug: card.slug}}" class="card-button-personale mt-3">Leggi il progetto</router-link>
            
        </div>
    </div>
</template>

<style lang="scss">

    .card-personale{
        width: 200px;
        height: 400px;
        border-radius: 20px;
        background: #f5f5f5;
        position: relative;
        padding: 1.8rem;
        border: 2px solid #c3c6ce;
        overflow: visible;
        
        .card-body-personale{
            color: black;
            place-content: center;
        }

        .card-button-personale {
            transform: translate(-50%, 125%);
            width: 60%;
            border-radius: 1rem;
            border: none;
            background-color: #074eb8;
            color: #fff;
            font-size: 1rem;
            padding: .5rem 1rem;
            position: absolute;
            left: 50%;
            bottom: 0;
            opacity: 0;
            transition: 0.3s ease-out;
            text-decoration: none;
        }

    }

    .card-personale:hover {
        border-color: #074eb8;
        box-shadow: 10px 10px 18px 0 rgba(0, 0, 0, 0.25);
        }

    .card-personale:hover .card-button-personale {
        transform: translate(-50%, 50%);
        opacity: 1;
    }

    img{
        width: 200px;
    }


</style>