<template>
    <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Premon</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="(contact,key) in contacts">
                        <td v-if="!contact.modify"/>{{contact.name}}</td>
                        <td v-else><input  type="text"></td>
                        <td v-if="!contact.modify"/>{{contact.firstname}}</td>
                        <td v-else><input  type="text"></td>
                        <td v-if="!contact.modify"/>{{contact.email}}</td>
                        <td v-else><input  type="email"></td>
                        <td v-if="!contact.modify"/>{{contact.tel}}</td>
                        <td v-else><input  type="text"></td>
                        
                        
                        <td> <button name="button" @click="update(key)"> <i class="fas fa-edit"></i></button> </td>
                        <td> <button name="button" @click="remove(key)"> <i class="fas fa-trash-alt"></i></button> </td>
                    </tr>
                        
                </tbody>
            </table>
     </div>
</template>

<script> 

module.exports = {
    data() {
        return {

            tel: "",
            name: "",
            email: "",
            firstname:"",
            count:0,
        }
    },
 
    props:['contacts'],
 
    methods: {
        remove(index){
            //supprimer l'element qui correspond à l'index
       this.contacts.splice(index,1);
                   this.$emit("save");

        },
        
        update(index){ 
         
          this.contacts[index].modify=!this.contacts[index].modify;

               
           
            
        }, 
    }   
}     
</script>