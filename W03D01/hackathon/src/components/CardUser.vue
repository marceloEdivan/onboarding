<template lang="pug">
  v-card(outlined)
    v-list-item(three-line)
      v-list-item-content
        v-list-item-title(class="text-h5 mb-1") {{user.name}}
        v-list-item-subtitle {{ user.login }}

      v-avatar
        img(:src="user.picture")
</template>

<script>
export default {
	data () {
		return {
		}
	},

  props: ['user'],
}
</script>