<script>
import axios from 'axios';
import { store } from '../store';

export default {
    data(){
        return{
            store,
            project: [],
            newDate: ''
        }
    },
    methods:{
        getProject(){
            axios.get(`${this.store.baseUrl}api/project/${this.$route.params.slug}`).then((response)=> {
                this.project =  response.results
                if (response.data && response.data.results) {
                    this.project = response.data.results;
                    console.log(this.project); // stampa l'oggetto project nella console
                } else {
                    console.log('Impossibile recuperare il progetto'); // il controllo mi servive per vedere se iniziliazzavo bene l'oggetto project
                }
            })
        },
        date(){
            this.newDate = this.project.data_progetto
        }


    },
    created(){
        this.getProject();
    }
}
</script>
<template lang="" >
    <div>
        <div class="container">
            <div class="row mt-4 text-light">
                <div class="col-6 ">
                    <p><span class="fw-bold">Difficolà d'esecuzione: </span><i class="fa-regular fa-circle mx-1" v-for="item in project.difficoltà" >{{item.difficoltà}}</i></p>
                </div>
                <div class="col-6">
                    <p><span class="fw-bold me-3">Creato il:</span>{{project.data_progetto}}</p>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row bd-personale ">
                <div class="col-12 text-light mt-5">
                    <h2 class="ms-3">
                        {{project.title}}
                    </h2>
                </div>
                <div class="col-6 d-flex flex-column">
                    <img :src=" project.cover_image != null ? `${store.baseUrl}storage/${project.cover_image}` : 'https://picsum.photos/200/130'" :alt="project.title">
                    <em>{{project.title}}</em>
                </div>
                <div class="col-6 text-light">
                    <p>{{project.descrizione}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quasi facere, nesciunt aliquam quas dolores, ducimus ab repudiandae animi veritatis incidunt reprehenderit tenetur similique velit voluptatibus fugiat, cumque veniam mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ullam iusto impedit. Sapiente beatae itaque ea quisquam incidunt veniam commodi explicabo a corporis placeat reprehenderit possimus magni, vero modi similique.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row mt-4 text-light">
                <div class="col-6 ">
                    <p class="fw-bold ">Tipologia: </p>
                    <p class="tag">{{project.type ? project.type.name : 'Non disponibile'}}</p><br> 
                </div>
                <div class="col-6">
                    <p><span class="fw-bold me-3">Creato il:</span>{{project.data_progetto}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    .bd-personale{
        border-top: 2px rgba(250, 250, 117, 0.863) solid;
        border-bottom: 2px rgba(250, 250, 117, 0.863) solid;
    }
    img{
        margin: 10px 0px 0px 12px;
        width: 300px;
    }
    em{
        margin: 10px 0px 0px 12px;
        color: #fff;
    }
    .fa-regular{
        color: #4F9D69;
        
    }
    
    .tag{
        background: #eee;
        border-radius: 3px 0 0 3px;
        color: #999;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        padding: 0 20px 0 23px;
        position: relative;
        margin: 0 10px 10px 0;
        text-decoration: none;
        -webkit-transition: color 0.2s;
    }
    .tag::after {
    background: #242424;
    border-bottom: 13px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    }

    .tag:hover {
    background-color: crimson;
    color: white;
    }

    .tag:hover::after {
    border-left-color: crimson; 
    }

</style>