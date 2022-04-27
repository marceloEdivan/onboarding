<template lang="pug">
  v-card(outlined)
    v-list-item(three-line)
      v-list-item-content
        div(class="text-overline mb-4") {{tool.type}}
        v-list-item-title(class="text-h5 mb-1") {{tool.name}}
        v-list-item-subtitle R$ {{ tool.price }}

      v-list-item-avatar(dark)
        v-icon(x-large) {{tool.icon}}

    v-card-actions
      v-btn(:elevation="5", outlined, class="ma-2", color="red", dark, fab, v-on:click="removeTool")
        v-icon mdi-delete

</template>

<script>
export default {
	data () {
		return {
		}
	},

  props: ['tool'],

  methods : {
    removeTool() {
      console.log('index:', this.tool)

      this.$emit('remove-tool', {
				tool : this.tool
			})
    }
  }
}
</script>