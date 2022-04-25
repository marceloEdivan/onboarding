<template lang="pug">
div(class="form-todo form-group")
	p
		v-text-field(v-model="name", label="Nome", name="name")
	p
		v-select(v-model="type", :items="items", label="Tipo", name="type")
	p
		v-text-field(v-model="price", type="number", label="Preço R$", name="price")
	p
		v-btn(class="ma-2", color="primary", dark, v-on:click="addTool")
			v-icon(left, dark) mdi-plus
			span Adicionar
</template>

<script>
export default {
	data () {
		return {
			name: '',
			type: '',
			price: '',
			items: ["Elétrica", "Manual"],
		}
	},

	methods: {
		addTool() {
			if(!this.name.trim() || !this.price.trim())
				return

			this.$emit('add-tool', {
				name : this.name,
				type: this.type,
				price: this.price,
			})

			this.name = ''
			this.type = ''
			this.price = ''
		},
	}
}
</script>