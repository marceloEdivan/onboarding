<template lang="pug">
div(class="form-todo form-group")
    p
        input(placeholder="Nome", type="text", name="name", v-model="name")
    p
        input(placeholder="Email", type="text", name="mail", v-model="email")
    p
        input(placeholder="Telefone", type="text", name="tel", v-model="tel")
    
    button(v-on:click="addUser", type="submit", class="btn btn-primary") Adicionar
</template>

<script>
export default {
    data () {
        return {
            name: '',
            email: '',
            tel: ''
        }
    },

    methods: {
        addUser() {
            if(!this.name.trim())
                return

            this.$emit('add-user', {
                name : this.name,
                email: this.email,
                tel: this.tel
            })

            this.name = ''
            this.email = ''
            this.tel = ''
        },
    }
}
</script>