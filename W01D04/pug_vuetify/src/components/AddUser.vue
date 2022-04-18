<template lang="pug">
div(class="form-todo form-group")
    p
        v-text-field(label="Nome", name="name", v-model="name")
    p
        v-text-field(label="Email", name="mail", v-model="email")
    p
        v-text-field(label="Telefone", name="tel", v-model="tel")
    P    
        //v-btn(v-on:click="addUser", type="submit", class="btn btn-primary") Adicionar
        v-btn(v-on:click="addUser" class="mx-2", type="submit", fab, color="cyan")
            v-icon(dark) mdi-plus
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