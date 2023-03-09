<script>
export default {
    props:{
        card:Object,
        url:String // per richiamarlo per stampare la visualizzazzione bisogna usare card o comunque il nome dato nella props
    },
}
</script>
<template >
    <div class="card mx-5 my-3" style="width: 18rem;">
        <img :src=" card.cover_image != null ? `${url}storage/${card.cover_image}` : 'https://picsum.photos/200/130'" :alt="card.title">
        <div class="card-body">
            <h3 class="card-title text-danger">{{card.title}}</h3>
            <p class="card-text"><span class="fw-bold">Uscito il: </span>{{card.data_progetto}}</p>
            <p class="card-text"><span class="fw-bold">Difficoltà: </span>{{card.difficoltà}}</p>
            <a href="#" class="btn btn-primary">Leggi il progetto</a>
        </div>
    </div>
</template>

<style lang="scss">

</style>