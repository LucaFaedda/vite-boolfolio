<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
  export default {
    components:{
      ProjectCard
    },
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
    <div class="container-fluid bk-personale">
      <div class="row">
        <div class="col-12 justify-content-center d-flex">
          <div v-if="loading == true">
              <div class="loader"></div>

          </div>
          <ProjectCard></ProjectCard>
          
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">


  .loader {
  margin-top:10rem;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #22333B;
  border-bottom: 16px solid #22333B;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>