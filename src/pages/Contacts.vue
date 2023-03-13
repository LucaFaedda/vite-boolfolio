<script>
export default {
    
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
                <form>
                    <div class="col-12">
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="nome">Nome</label>
                            <input type="text" class="form-control" name="nome" id="nome" v-model="name" placeholder="Inserisci il nome">
                        </div>
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="cognome">Cognome</label>
                            <input type="text" class="form-control" name="cognome" id="cognome" v-model="surname" placeholder="Inserisci il cognome">
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="mail">Email</label>
                            <input type="mail" class="form-control" name="mail" id="mail" v-model="email" placeholder="Inserisci l'email">
                        </div>
                        <div class="col-6">
                            <label class="control-label fw-bold my-2" for="phone">Telefono</label>
                            <input type="phone" class="form-control" name="phone" id="phone" v-model="phone" placeholder="Inserisci il Numero di telefono">
                        </div>
                    </div>
                    <div class="col-12">
                          <label for="message" class="form-label fw-bold my-2">Scrivi il tuo messaggio</label>
                          <textarea class="form-control" name="message" id="message" rows="3" placeholder="Inserisci un messaggio" v-model="message"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>