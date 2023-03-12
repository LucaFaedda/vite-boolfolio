<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data(){
        return{
            store,
            project: []
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

    },
    created(){
        this.getProject(); 
    }
}
</script>
<template lang="" >
    <div>
        <div class="container">
            <div class="row">
                <div class="col-6 text-light">
                    <p><span>Difficolà d'esecuzione: </span><i class="fa-solid fa-circle" v-for="item in project.difficoltà" >{{item.difficoltà}}</i></p>
                </div>
                <div class="col-6">
                    
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
    </div>
</template>

<style lang="scss" scoped>
    
    .bd-personale{
        border-top: 2px rgba(250, 250, 117, 0.863) solid;
    }

    img{
        margin: 10px 0px 0px 12px;
        width: 300px;
    }

    em{
        margin: 10px 0px 0px 12px;
        color: #fff;
    }

</style>