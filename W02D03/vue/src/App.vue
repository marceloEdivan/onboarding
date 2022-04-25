<template lang="pug">
v-app
  v-container
    NavbarComponent
    router-view
</template>

<script>
import ListTools from './components/ListTools.vue'
import NavbarComponent from './components/NavbarComponent.vue'

export default {
  name: 'App',
  components: {
    ListTools,
    NavbarComponent
  }
}
</script>

<style>
</style>
