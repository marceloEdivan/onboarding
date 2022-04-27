<template lang="pug">
v-container
	h1 Ferramentas Cadastradas
	//- span aqui: {{ tools }}
	v-divider
  
	p(v-if="tools.length <= 0") Nenhuma ferramenta cadastrada...
	
	div(class="list-group")
		CardTool(v-for="(tool, index) in allTools", :key="index", v-bind:tool="tool", v-on:remove-tool='removeTool')
		
</template>

<script>
import CardTool from '../components/CardTool.vue'
import {mapActions, mapState} from 'vuex'


export default {
	components: {
		CardTool
	},

	data () {
		return {}
	},

	methods: {
		...mapActions(["removeTool"]),

		// removeTool(tool) {
		// 	this.$store.dispatch('removeTool', tool)
		// }
	},

	computed: {
		...mapState(["tools"]),

		// tools(){
		// 	return this.$store.state.tools
		// },

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
