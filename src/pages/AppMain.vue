<script>

import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
  export default {
    components:{
      ProjectCard
    },
    data(){
      return{
        store,
        projects: [],
        loading: true,
        currentPage: 1,
        lastPage: null,
        technology: []
      }
    },
    methods:{
      getProjects(project_page){
        axios.get(`${this.store.baseUrl}api/projects`, {params: {page: project_page}}).then((response) => {
          if(response.data.success){
            // console.log(response.data)
            this.projects = response.data.results.data // recupero i miei dati richiamati con axios
            this.currentPage = response.data.results.current_page; // recupero la pagina corrente
            this.lastPage = response.data.results.last_page // recupero l'ultima pagina
            this.loading = false;
          }
        })
      }
    },
    created(){
      this.getProjects(this.currentPage);
    }
  }
</script>
<template lang="">
  <div>
    <div class="container-fluid">
      <div class="row">
        <div v-if="loading == true" class="d-flex justify-content-center ">
          <div class="loader "></div>
        </div>
        <div v-else class="col-12 d-flex justify-content-center flex-wrap align-item-center">
          <ProjectCard v-for="project in projects" :card="project"  :key="project.id"></ProjectCard>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center mt-4">
          <ul class="pagination">
            <li :class="currentPage == 1 ? 'disabled' : 'page-item'">
              <button class="page-link btn btn-sm btn-success" @click="getProjects(currentPage - 1)">Prev</button>
            </li>
            <li :class="currentPage == lastPage ? 'disabled' : 'page-item'">
              <button class="page-link btn btn-sm btn-success" @click="getProjects(currentPage + 1)">Next</button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss">


.loader {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-color: #dbdcef #0000;
  animation: loader-e04l1k 1s infinite linear;
}

.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  border: inherit;
  border-radius: 50%;
}

.loader::before {
  border-color: #474bff #0000;
  animation: inherit;
  animation-duration: 0.5s;
  animation-direction: reverse;
}

.loader::after {
  margin: 8.9px;
}

@keyframes loader-e04l1k {
  100% {
    transform: rotate(1turn);
  }
}
</style>