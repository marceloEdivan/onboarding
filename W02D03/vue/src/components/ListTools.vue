<template lang="pug">
div(class="container")
	h1 Cadastro de Ferramentas
	v-divider
	AddTool(v-on:add-tool="addTool")
	
	p(v-if="tools.length <= 0") Nenhuma ferramenta cadastrada...
	
	div(class="list-group")
		CardTool(v-for="(tool, index) in allTools", :key="index", v-bind:tool="tool", v-on:remove-tool='removeTool')
		
</template>

<script>
import AddTool from './AddTool.vue'
import CardTool from './CardTool.vue'


export default {
	components: {
		AddTool,
		CardTool
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
				icon: !tool.type.trim() ? 'mdi-help-circle-outline' : (tool.type === 'Manual' ? 'mdi-pipe-wrench' : 'mdi-power-plug'),
				type: !tool.type.trim() ? 'Não especificado' : tool.type,
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
