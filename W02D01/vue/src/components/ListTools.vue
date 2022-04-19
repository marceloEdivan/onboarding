<template lang="pug">
div(class="container")
	AddTool(v-on:add-tool="addTool")
	p(v-if="tools.length <= 0") Nenhuma ferramenta cadastrada...
	
	div(class="list-group")
		div(class="list-group-item" v-for="(tool, index) in allTools" :key="index")

			v-row(no-gutters, align="center")
				
				v-col(cols="3", sm="2", lg="1", xl='1' align-self="center")
					v-avatar(dark)
						v-icon(x-large) mdi-pipe-wrench 
						//- power-plug help-circle-outline

				v-col(cols="6", sm="8", lg="10", xl='10' align-self="center")
					span Nome: 
						strong  {{ tool.name }}
					br
					span Tipo: 
						strong  {{ tool.type }}
					br
					span Preço R$: 
						strong  {{ tool.price }}

				v-col(cols="3", sm="2", lg="1", xl='1' align-self="center")
					div
						v-btn(class="ma-2", color="red", dark, fab, v-on:click="removeTool")
							v-icon mdi-delete
</template>

<script>
import AddTool from './AddTool.vue'

export default {
	components: {
		AddTool
	},

	data () {
		return {
			tools : []
		}
	},

	methods: {
		addTool(tool) {
			this.tools.push(tool)
		},

		removeTool(index) {
			this.tools.splice(index, 1)
		}
	},

	computed: {
		allTools() {
			return this.tools.map(tool => ({
				...tool,
				type:  !tool.type.trim() ? 'Não especificado.' : tool.type,
			}))
		}
	},

	watch: {
		tools(val){
			console.log('Ferramentas alteradas')
			console.log(val)
		}
	}
}
</script>

<style>
</style>
