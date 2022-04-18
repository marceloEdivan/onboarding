<template lang="pug">
div(class="hello")

div(class="container")
    h1 Check in
    hr
    AddUser(v-on:add-user="addUser")
    p(v-if="users.length <= 0") Nenhum usuário cadastrado...
    
    div(class="list-group")
        div(class="list-group-item" v-for="(user, index) in allUsers" :key="index")
            span(class="user_name") Nome: 
                strong  {{ user.name }}
                br
            span(class="user_name") Email: 
                strong  {{ user.email }}
                br
            span(class="user_name") Tel.: 
                strong  {{ user.tel }}
                br
            div
                a(href="#" title="Excluir" v-on:click.prevent="removeUser(index)") Excluir
                br
                button(v-on:click="removeUser(index)", type="submit", class="btn btn-primary") Excluir
                br
                v-btn(color="error") Error
</template>

<script>
import AddUser from './AddUser.vue'

export default {
    components: {
        AddUser
    },

    data () {
        return {
            users : []
        }
    },

    methods: {
        addUser(user) {
            this.users.push(user)
        },

        removeUser(index) {
            this.users.splice(index, 1)
        }
    },

  computed: {
    allUsers() {
        return this.users.map(user => ({
            ...user,
            email:  !user.email.trim() ? 'Sem email' : user.email,
            tel:    !user.tel.trim() ? 'Sem telefone' : user.tel
            
        }))
    }
  }
}
</script>

<style>
</style>
