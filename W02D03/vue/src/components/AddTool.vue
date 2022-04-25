<template lang="pug">
v-container
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