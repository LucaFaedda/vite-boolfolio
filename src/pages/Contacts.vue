<script>

import axios from 'axios';
import { store } from '../store';
export default {
    data(){
        return{
            store,
            nome: '',
            cognome: '',
            email:'',
            phone: '',
            message: '',
            success: false,
            loading: false,
            errors: {}

        }
    },
    methods:{
        sendForm(){
            const data = {
                nome: this.nome,
                cognome: this.cognome,
                email: this.email,
                phone: this.phone,
                message: this.message
            }

            this.loading = true;
            this.errors= {}
            

            axios.post(`${this.store.baseUrl}api/contacts`, data).then((response) =>{
                if(!response.data.success){
                    console.log(response.data.errors)
                    this.errors = response.data.errors
                    this.loading = false
                }
                else{
                    this.nome= '',
                    this.cognome= '',
                    this.email='',
                    this.phone= '',
                    this.message= '' 
                    this.success= true,
                    this.loading = false
                    
                }
            })
        }
    }
}
</script>
<template lang="">
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 mt-5">
                    <h2>Info BoolFolio</h2> 
                </div>
                <div class="col-6">
                    <p><span class="fw-bold">Email: </span> info@boolpress.com</p>
                </div>
                <div class="col-6">
                    <p><span class="fw-bold">P.IVA: </span> 542115480000</p>
                </div>
                <div class="col-6">
                    <p><span class="fw-bold">Fax:  </span> 10248841</p>
                </div>
                <div class="col-6">
                    <p><span class="fw-bold">Num. Telefono </span> +3965147824</p>
                </div>
                <div class="col-12 my-5">
                    <h5>Se vuoi più informazioni....</h5>
                    <p>Compila il form qua sotto per contattarci, risponderemo al più presto</p>
                </div>
            </div>
            <div class="row mt-5">
                <form @submit.prevent="sendForm">
                    <div class="col-12">
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="nome">Nome</label>
                            <input type="text" class="form-control" name="nome" id="nome" v-model="nome" placeholder="Inserisci il nome">
                            <div  v-for="(error, index) in errors.nome" :key="`message-error-${index}`" class="alert alert-danger my-2">     
                                <p  class="fw-bold">{{error}}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="cognome">Cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" v-model="cognome" placeholder="Inserisci il cognome">
                           <div  v-for="(error, index) in errors.cognome" :key="`message-error-${index}`" class="alert alert-danger my-2">     
                                <p  class="fw-bold">{{error}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="mail">Email</label>
                            <input type="mail" class="form-control" name="mail" id="mail" v-model="email" placeholder="Inserisci l'email">
                            <div  v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="alert alert-danger my-2">     
                                <p  class="fw-bold">{{error}}</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="phone">Telefono</label>
                            <input type="phone" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Inserisci il Numero di telefono">
                            <div  v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="alert alert-danger my-2">     
                                <p  class="fw-bold">{{error}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                          <label for="message" class="form-label fw-bold my-2">Scrivi il tuo messaggio</label>
                          <textarea class="form-control" name="message" id="message" rows="3" placeholder="Inserisci un messaggio" v-model="message"></textarea>
                          <div  v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="alert alert-danger my-2">     
                                <p  class="fw-bold">{{error}}</p>
                            </div>
                    </div>
                    <div class="col-4 mb-5">
                        <button type="submit" class="btn-personale mt-4" :disable="loading">{{loading ? 'Invio in corso...' : 'invio'}}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .btn-personale{
        width: 150px;
        height: 50px;
        border-radius: 45px;
        transition: all 0.3s;
        cursor: pointer;
        // font-size: 1.2rem;
        background-color: #315cfd;
        border: 3px solid #315cfd;
        
        &:hover{
            // border: #315cfd;
            background: #fff;
            color:#315cfd;
            // font-size: 1.5rem;
        }
    }
    
</style>