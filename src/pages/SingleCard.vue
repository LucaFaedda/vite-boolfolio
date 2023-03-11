<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data(){
        return{
            store,
            project: null
        }
    }, 
    created(){
        axios.get(`${this.store.baseUrl}api/project/${this.$route.params.slug}`).then((response)=> {
          
            this.project = response.data.project 

          
        })
        .catch((error) => {
            console.log(error);
        });



    }
}
</script>
<template lang="">
    
       ciao
</template>

<style lang="">
    
</style>