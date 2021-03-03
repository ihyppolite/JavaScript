
new Vue({
    el: '#app',
    components:{ 'FormV':httpVueLoader('FormV.vue') ,'ShowContact':httpVueLoader('ShowContact.vue') },
        data: {
            contacts :[],
            count:0,
    },
    
     methods:{
        loadContacts(){
          
            if(localStorage.getItem("contacts")!=null){
                
                let chaine = localStorage.getItem("contacts");
                this.contacts = JSON.parse(chaine);
            }
            
        },
        saveContacts(){
             
            
            let chaineTableau = JSON.stringify(this.contacts);
           
            localStorage.setItem("contacts",chaineTableau)
            
            
        }
        
        
    },
    
    //CRÉATION DU HOOK BEFORE MOUNT
    beforeMount(){
        //EXECUTER UNE DE NOS METHODES
        this.loadContacts();
    }
});
