<template lang="pug">
v-app
  div(class="container")
    h1 Cadastro de Ferramentas
    v-divider
    ListTools
</template>

<script>
import ListTools from './components/ListTools.vue'

export default {
  name: 'App',
  components: {
    ListTools
  }
}
</script>

<style>
</style>
