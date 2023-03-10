<script>
export default {
    data(){
         return{
            menuItems:[
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Progetti',
                    routeName: 'progetti'
                },
            ]
        }
    }
}
</script>
<template lang="">
    <header class=" d-flex align-item-center  navbar justify-content-between text-light">
        <div class="ps-5">
            <h2>BOOLFOLIO</h2>
        </div>
        <div  class="pe-5">
            <ul class="list-unstyled d-flex">
                <li class="mx-3" v-for="(item, index) in menuItems" :key="index">
                    <router-link :to="{name: item.routeName}" class="text-light nav-link">{{item.label}}</router-link>
                
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
    
    header{
        height: 100px;
        background-color: #003554;
    }

</style>