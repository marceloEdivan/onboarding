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
      v-btn(outlined, class="ma-2", color="red", dark, fab, v-on:click="removeTool")
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
    removeTool(index) {
      this.$emit('remove-tool', {
				index : index
			})
    }
  }
}
</script>