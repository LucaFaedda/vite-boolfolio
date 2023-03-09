<script>

import axios from 'axios';
  export default {
    data(){
      return{
        projects: [],
        baseUrl: 'http://127.0.0.1:8000/',
        loading: true
      }
    },
    methods:{
      getProjects(){
        axios.get(`${this.baseUrl}api/projects`).then((response) => {
          if(response.data.success){
            console.log(response.data)
            this.projects = response.data.results;
            this.loading = false;
          }
        })
      }
    },
    created(){
      this.getProjects();
    }
  }
</script>
<template lang="">
  <div>
    
  </div>
</template>
<style lang="">
  
</style>