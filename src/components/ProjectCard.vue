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
            <h5 class="card-title">{{card.title}}</h5>
            <p class="card-text">{{card.descrizione}}</p>
            <a href="#" class="btn btn-primary">Leggi il progetto</a>
        </div>
    </div>
</template>

<style lang="scss">

</style>