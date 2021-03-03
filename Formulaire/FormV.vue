<template>
    <form action="" @submit.prevent="createContact">	
    
        <label for="name">Nom</label>
        <input type="text" v-model="name"  /> 
                    
                    
                    
        <label for="firstname">Prenom</label>
        <input type="text" v-model="firstname"  /> 
                    
                   
                    
        <label for="email">Email</label> 
        <input type="email" v-model="email" />
                    
                    
                    
        <label for="phone">Phone</label> 
        <input type="text" v-model="tel" />
                    
        <br>
                    
        <input  type="submit"/>
                    
    </form>
</template>

<script>
module.exports = { 
        
    data() {
        return {

            tel: "",
            name: "",
            email: "",
            firstname:"",
        }
    },
    
    props:['contacts'],
    
     methods: {
        createContact(){
            //DECLARER UN TABLEAU CONTACTS VIDE
            
            let newContact = {name:this.name,firstname:this.firstname,email:this.email,tel:this.tel,modify:false};
            //JE PUSH MON CONTACT DANS MON TABLEAU DE CONTACTS
            this.contacts.push(newContact);
            this.$emit('save');
            
        }
        
        
    }
        
}
    
</script>