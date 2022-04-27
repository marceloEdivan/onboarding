<template lang="pug">
v-container
	h1 Cadastro de Ferramentas
	//- span aqui: {{ tools }}
	v-divider
	p
		v-text-field(v-model="name", label="Nome", name="name")
	p
		v-select(v-model="type", :items="['Elétrica', 'Manual']", label="Tipo", name="type")
	p
		v-text-field(v-model="price", type="number", label="Preço R$", name="price")
	p
		v-btn(:elevation="5", class="ma-2 float-right", color="primary", dark, v-on:click="addTool", v-if="!loading")
			v-icon(left, dark) mdi-plus
			span Adicionar

		v-progress-circular(indeterminate, color="primary", v-if="loading")

		//- v-alert(v-model="successAlert", class="float-right", border="left", shaped, type="success", dismissible) Ferramenta cadastrada com sucesso!
</template>

<script>

export default {
	data () {
		return {
			name: '',
			type: '',
			price: '',
			loading: false,
			successAlert: true
		}
	},

	computed:{
		tools(){
			return this.$store.state.tools
		}
	},

	methods: {
		async addTool() {
			if(!this.name.trim() || !this.price.trim())
				return

			try {
				this.loading = true

				await this.$store.dispatch('addTool', {
					name : this.name,
					type: this.type,
					price: this.price,
				})
				
			} finally {
				this.loading = false
			}

			this.name = ''
			this.type = ''
			this.price = ''
		},
	}
}
</script>