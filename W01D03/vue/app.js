new Vue ({
    el: '#vue-app',

    template: ``,

    data () {
        return {
            users : [],
            
            name: '',
            email: '',
            tel: ''
        }
    },

    methods: {
        addUser() {
            if(!this.name.trim())
                return
            
            this.users.push({
                name: this.name, 
                email: this.email,
                tel: this.tel,
            })

            this.name = ''
            this.email = ''
            this.tel = ''
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
})